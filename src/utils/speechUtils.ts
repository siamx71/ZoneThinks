/**
 * Speech Recognition and Speech Synthesis Utilities for Friday AI Assistant
 * Supports English and Bengali (Bangla) speech input & voice output.
 */

// Define Speech Recognition types for browser compatibility
interface IWindow extends Window {
  webkitSpeechRecognition?: any;
  SpeechRecognition?: any;
}

export class FridaySpeechRecognizer {
  private recognition: any = null;
  private isListening: boolean = false;
  private onResultCallback?: (text: string, isFinal: boolean) => void;
  private onErrorCallback?: (error: string) => void;
  private onStateChangeCallback?: (listening: boolean) => void;
  private language: string = 'en-US'; // 'en-US' or 'bn-BD'

  constructor(lang: string = 'en-US') {
    this.language = lang;
    this.init();
  }

  private init() {
    const win = window as unknown as IWindow;
    const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      console.warn('SpeechRecognition is not supported in this browser.');
      return;
    }

    try {
      this.recognition = new SpeechRecognitionClass();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = this.language;

      this.recognition.onstart = () => {
        this.isListening = true;
        this.onStateChangeCallback?.(true);
      };

      this.recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const text = finalTranscript || interimTranscript;
        if (text && this.onResultCallback) {
          this.onResultCallback(text, !!finalTranscript);
        }
      };

      this.recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        if (event.error !== 'no-speech') {
          this.onErrorCallback?.(event.error);
        }
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.onStateChangeCallback?.(false);
      };
    } catch (err) {
      console.error('Failed to initialize speech recognition', err);
    }
  }

  public setLanguage(lang: string) {
    this.language = lang;
    if (this.recognition) {
      this.recognition.lang = lang;
    }
  }

  public isSupported(): boolean {
    const win = window as unknown as IWindow;
    return !!(win.SpeechRecognition || win.webkitSpeechRecognition);
  }

  public start(
    onResult: (text: string, isFinal: boolean) => void,
    onStateChange?: (listening: boolean) => void,
    onError?: (error: string) => void
  ) {
    this.onResultCallback = onResult;
    this.onStateChangeCallback = onStateChange;
    this.onErrorCallback = onError;

    if (!this.recognition) {
      this.init();
    }

    if (this.recognition && !this.isListening) {
      try {
        this.recognition.start();
      } catch (e) {
        console.warn('SpeechRecognition start failed', e);
      }
    }
  }

  public stop() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        console.warn('SpeechRecognition stop failed', e);
      }
    }
    this.isListening = false;
    this.onStateChangeCallback?.(false);
  }

  public getStatus(): boolean {
    return this.isListening;
  }
}

export class FridaySpeechSynthesizer {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking: boolean = false;
  private onStateChangeCallback?: (speaking: boolean) => void;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (this.synth) {
      this.voices = this.synth.getVoices();
    }
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public speak(
    text: string,
    langHint: 'en' | 'bn' | 'auto' = 'auto',
    onStart?: () => void,
    onEnd?: () => void,
    onError?: () => void
  ) {
    if (!this.synth) return;

    // Clean text of markdown, asterisks, emojis or code blocks for clearer audio synthesis
    const cleanText = text
      .replace(/```[\s\S]*?```/g, 'Code block omitted for voice.')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/#{1,6}\s?/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/<[^>]*>/g, '')
      .replace(/🧠\s*Thought Process:[\s\S]*?(\n\n|$)/gi, '') // Don't speak thought tags out loud
      .trim();

    if (!cleanText) return;

    this.stop(); // Stop any active speech

    const utterance = new SpeechSynthesisUtterance(cleanText);
    this.currentUtterance = utterance;

    // Detect if text contains Bengali characters
    const hasBangla = /[\u0980-\u09FF]/.test(cleanText);
    const targetLang = (langHint === 'bn' || (langHint === 'auto' && hasBangla)) ? 'bn' : 'en';

    if (this.voices.length === 0) {
      this.loadVoices();
    }

    if (targetLang === 'bn') {
      const bnVoice = this.voices.find(v => v.lang.startsWith('bn') || v.name.toLowerCase().includes('bangla') || v.name.toLowerCase().includes('bengali'));
      if (bnVoice) {
        utterance.voice = bnVoice;
        utterance.lang = bnVoice.lang;
      } else {
        utterance.lang = 'bn-BD';
      }
      utterance.rate = 1.0;
      utterance.pitch = 1.05;
    } else {
      // Find a crisp, natural sounding English voice
      const enVoice = this.voices.find(v => 
        (v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('Jenny') || v.name.includes('Female')))
      ) || this.voices.find(v => v.lang.startsWith('en'));

      if (enVoice) {
        utterance.voice = enVoice;
        utterance.lang = enVoice.lang;
      } else {
        utterance.lang = 'en-US';
      }
      utterance.rate = 1.02;
      utterance.pitch = 1.0;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.onStateChangeCallback?.(true);
      onStart?.();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.onStateChangeCallback?.(false);
      this.currentUtterance = null;
      onEnd?.();
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      this.isSpeaking = false;
      this.onStateChangeCallback?.(false);
      this.currentUtterance = null;
      onError?.();
    };

    this.synth.speak(utterance);
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.onStateChangeCallback?.(false);
      this.currentUtterance = null;
    }
  }

  public pause() {
    if (this.synth && this.isSpeaking) {
      this.synth.pause();
    }
  }

  public resume() {
    if (this.synth) {
      this.synth.resume();
    }
  }

  public getSpeakingStatus(): boolean {
    return this.isSpeaking;
  }

  public onStateChange(callback: (speaking: boolean) => void) {
    this.onStateChangeCallback = callback;
  }
}
