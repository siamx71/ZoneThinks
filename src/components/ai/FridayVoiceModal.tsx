import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, VolumeX, X, Sparkles, Brain, Radio, Globe, PhoneOff } from 'lucide-react';
import { FridaySpeechRecognizer, FridaySpeechSynthesizer } from '@/utils/speechUtils';
import { askFriday, FridayMessage } from '@/services/fridayAiService';
import { cn } from '@/utils/cn';

interface FridayVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewMessage?: (msg: FridayMessage) => void;
}

export const FridayVoiceModal: React.FC<FridayVoiceModalProps> = ({ isOpen, onClose, onNewMessage }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [language, setLanguage] = useState<'en-US' | 'bn-BD'>('en-US');
  const [userTranscript, setUserTranscript] = useState('');
  const [lastFridayResponse, setLastFridayResponse] = useState('');
  const [lastThought, setLastThought] = useState('');

  const recognizerRef = useRef<FridaySpeechRecognizer | null>(null);
  const synthesizerRef = useRef<FridaySpeechSynthesizer | null>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      recognizerRef.current = new FridaySpeechRecognizer(language);
      synthesizerRef.current = new FridaySpeechSynthesizer();

      synthesizerRef.current.onStateChange((speaking) => {
        setIsSpeaking(speaking);
      });

      // Quick natural audio greeting
      const greeting = language === 'bn-BD'
        ? "হ্যালো, আমি শুনছি। আপনার প্রজেক্ট বা ওয়েবসাইট সম্পর্কে বলুন।"
        : "Hello, I'm listening. How can I help with your project today?";

      setLastFridayResponse(greeting);
      synthesizerRef.current.speak(
        greeting,
        language === 'bn-BD' ? 'bn' : 'en',
        () => setIsSpeaking(true),
        () => {
          setIsSpeaking(false);
          startListening();
        }
      );
    } else {
      stopAll();
    }

    return () => {
      stopAll();
    };
  }, [isOpen, language]);

  const stopAll = () => {
    if (recognizerRef.current) {
      recognizerRef.current.stop();
    }
    if (synthesizerRef.current) {
      synthesizerRef.current.stop();
    }
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
    }
    setIsListening(false);
    setIsSpeaking(false);
    setIsThinking(false);
  };

  const startListening = () => {
    if (!recognizerRef.current) return;
    setUserTranscript('');

    recognizerRef.current.start(
      (text) => {
        // If user interrupts while Friday is speaking, stop speaking immediately!
        if (synthesizerRef.current?.getSpeakingStatus()) {
          synthesizerRef.current.stop();
          setIsSpeaking(false);
        }

        setUserTranscript(text);

        if (silenceTimerRef.current) {
          clearTimeout(silenceTimerRef.current);
        }

        // Auto process after user stops speaking for 1.6s
        if (text.trim().length > 2) {
          silenceTimerRef.current = setTimeout(() => {
            handleProcessVoiceInput(text);
          }, 1600);
        }
      },
      (listening) => {
        setIsListening(listening);
      },
      (err) => {
        console.warn('Voice error:', err);
      }
    );
  };

  const toggleListening = () => {
    if (isListening) {
      recognizerRef.current?.stop();
      setIsListening(false);
    } else {
      if (isSpeaking) {
        synthesizerRef.current?.stop();
      }
      startListening();
    }
  };

  const handleProcessVoiceInput = async (query: string) => {
    if (!query.trim()) return;
    recognizerRef.current?.stop();
    setIsListening(false);
    setIsThinking(true);

    const userMsg: FridayMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: Date.now()
    };
    onNewMessage?.(userMsg);

    try {
      const response = await askFriday(query, [userMsg], true);
      setIsThinking(false);
      setLastFridayResponse(response.reply);
      if (response.thoughtProcess) {
        setLastThought(response.thoughtProcess);
      }

      const assistantMsg: FridayMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.reply,
        thoughtProcess: response.thoughtProcess,
        timestamp: Date.now()
      };
      onNewMessage?.(assistantMsg);

      // Speak response back
      synthesizerRef.current?.speak(
        response.reply,
        language === 'bn-BD' ? 'bn' : 'auto',
        () => setIsSpeaking(true),
        () => {
          setIsSpeaking(false);
          setTimeout(() => {
            startListening();
          }, 400);
        }
      );
    } catch (err) {
      console.error(err);
      setIsThinking(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'en-US' ? 'bn-BD' : 'en-US';
    setLanguage(newLang);
    if (recognizerRef.current) {
      recognizerRef.current.setLanguage(newLang);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background-deep/95 backdrop-blur-2xl"
        />

        {/* Live Audio Call Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          className={cn(
            "relative w-full max-w-xl min-h-[520px] flex flex-col justify-between p-6 sm:p-8 rounded-3xl border shadow-2xl overflow-hidden z-10",
            "bg-gradient-to-b from-surface-raised/95 via-surface-overlay/90 to-surface-sunken/95 border-brand-cyan/40 text-text-primary",
            "dark:from-background-surface/95 dark:via-background-overlay/90 dark:to-background-deep/95 dark:border-brand-cyan/40 dark:shadow-glow-cyan"
          )}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shadow-glow-cyan">
                <Radio className="w-4 h-4 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base flex items-center gap-2">
                  FRIDAY Live Voice
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono uppercase font-bold">
                    Connected
                  </span>
                </h3>
                <p className="text-xs text-text-muted">
                  ZoneThinks IT • Real-Time Voice Consultation
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-edge/40 bg-surface-raised/80 hover:border-brand-cyan/50 text-text-secondary hover:text-brand-cyan transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'en-US' ? 'English' : 'বাংলা'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-text-muted hover:text-red-400 hover:bg-red-500/10 transition-colors"
                title="End Voice Call"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Orb & Animated Waves (Gemini Live / Advanced Voice Mode Visualizer) */}
          <div className="flex-1 flex flex-col items-center justify-center my-4 relative z-10">
            <div className="relative flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56">
              {/* Outer Energy Glow Ring */}
              <motion.div
                animate={{
                  scale: isSpeaking ? [1, 1.28, 1] : isListening ? [1, 1.15, 1] : 1,
                  opacity: isSpeaking || isListening ? [0.4, 0.8, 0.4] : 0.2,
                  rotate: 360
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-brand-cyan/40"
              />

              <motion.div
                animate={{
                  scale: isSpeaking ? [1, 1.35, 1] : isListening ? [1, 1.18, 1] : 1,
                  opacity: isSpeaking ? [0.25, 0.6, 0.25] : 0.15,
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 rounded-full bg-brand-cyan/15 blur-xl"
              />

              {/* Core Reactive Orb */}
              <motion.div
                animate={{
                  scale: isSpeaking ? [0.96, 1.07, 0.96] : isListening ? [0.98, 1.03, 0.98] : 1,
                  boxShadow: isSpeaking
                    ? "0 0 50px rgba(6, 182, 212, 0.8), 0 0 100px rgba(59, 130, 246, 0.4)"
                    : isListening
                    ? "0 0 40px rgba(16, 185, 129, 0.7)"
                    : "0 0 25px rgba(6, 182, 212, 0.3)"
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className={cn(
                  "relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center border-2 transition-colors duration-500",
                  isSpeaking
                    ? "bg-gradient-to-tr from-brand-cyan/40 via-blue-600/30 to-purple-600/40 border-brand-cyan"
                    : isListening
                    ? "bg-gradient-to-tr from-emerald-500/30 via-brand-cyan/20 to-teal-500/30 border-emerald-400"
                    : isThinking
                    ? "bg-gradient-to-tr from-amber-500/30 via-brand-cyan/20 to-purple-500/30 border-amber-400"
                    : "bg-surface-raised/80 border-brand-cyan/30"
                )}
              >
                {isThinking ? (
                  <Brain className="w-10 h-10 text-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
                ) : isSpeaking ? (
                  <Volume2 className="w-10 h-10 text-brand-cyan animate-pulse" />
                ) : isListening ? (
                  <Mic className="w-10 h-10 text-emerald-400 animate-bounce" />
                ) : (
                  <Sparkles className="w-10 h-10 text-brand-cyan" />
                )}

                <span className="text-[11px] font-mono font-bold tracking-widest mt-2 uppercase text-text-primary">
                  {isThinking
                    ? 'Thinking...'
                    : isSpeaking
                    ? 'Speaking'
                    : isListening
                    ? 'Listening...'
                    : 'Ready'}
                </span>
              </motion.div>
            </div>

            {/* Dynamic Sound Waveforms */}
            <div className="flex items-center gap-1.5 h-8 mt-5">
              {[35, 75, 45, 90, 55, 80, 50, 95, 65, 40, 85, 45].map((height, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    height: isSpeaking || isListening ? [`${height * 0.3}%`, `${height}%`, `${height * 0.3}%`] : '15%'
                  }}
                  transition={{
                    duration: 0.5 + (idx % 3) * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.04
                  }}
                  className={cn(
                    "w-1.5 rounded-full transition-colors",
                    isSpeaking ? "bg-brand-cyan" : isListening ? "bg-emerald-400" : "bg-edge/40"
                  )}
                />
              ))}
            </div>

            {/* Live Subtitle Transcript */}
            <div className="w-full max-w-md mt-4 text-center px-2">
              {userTranscript && (
                <p className="text-xs sm:text-sm font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-2 px-3 rounded-xl mb-1.5">
                  "{userTranscript}"
                </p>
              )}

              {lastFridayResponse && !userTranscript && (
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans bg-surface-sunken/70 dark:bg-black/30 p-2.5 rounded-xl border border-edge/30">
                  {lastFridayResponse.replace(/<[^>]*>?/gm, '').slice(0, 160)}
                </p>
              )}
            </div>
          </div>

          {/* Bottom Action Controls */}
          <div className="flex items-center justify-center gap-4 z-20 pt-3 border-t border-edge/20 dark:border-white/10">
            {/* Mic Toggle */}
            <button
              onClick={toggleListening}
              className={cn(
                "p-3.5 rounded-full border transition-all duration-200 shadow-lg flex items-center justify-center",
                isListening
                  ? "bg-emerald-500 text-black border-emerald-400 shadow-emerald-500/40 scale-105"
                  : "bg-surface-raised hover:bg-surface-overlay text-text-primary border-edge/50 hover:border-brand-cyan"
              )}
              title={isListening ? "Mute Microphone" : "Unmute Microphone"}
            >
              {isListening ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>

            {/* Stop Speaking */}
            <button
              onClick={() => synthesizerRef.current?.stop()}
              className={cn(
                "p-3.5 rounded-full border transition-all duration-200 shadow-lg flex items-center justify-center",
                isSpeaking
                  ? "bg-brand-cyan text-black border-brand-cyan shadow-glow-cyan"
                  : "bg-surface-raised text-text-muted border-edge/50 hover:text-text-primary"
              )}
              title="Stop Speaking"
            >
              {isSpeaking ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* End Call Button */}
            <button
              onClick={onClose}
              className="p-3.5 rounded-full bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/40 transition-all duration-200 shadow-lg flex items-center justify-center"
              title="End Voice Call"
            >
              <PhoneOff className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
