import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  Sparkles, 
  RotateCcw, 
  Copy, 
  Check, 
  Download, 
  ArrowUpRight,
  User,
  Zap,
  PhoneCall,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';
import { askFriday, FridayMessage } from '@/services/fridayAiService';
import { FridaySpeechRecognizer, FridaySpeechSynthesizer } from '@/utils/speechUtils';
import { ThinkingBadge } from './ThinkingBadge';
import { FridayVoiceModal } from './FridayVoiceModal';
import { Button } from '@/components/common/Button';
import { cn } from '@/utils/cn';
import { Link } from 'react-router-dom';

const QUICK_PROMPTS = [
  {
    icon: "💰",
    label: "বাজেট ও খরচ",
    prompt: "একটি ফুল-স্ট্যাক ই-কমার্স বা বিজনেস ওয়েবসাইটের বাজেট এবং টাইমলাইন কেমন হবে?"
  },
  {
    icon: "⚡",
    label: "Next.js vs WordPress",
    prompt: "Why should we build our SaaS with Next.js & React instead of traditional WordPress?"
  },
  {
    icon: "💎",
    label: "প্যাকেজ ও সুবিধা",
    prompt: "ZoneThinks IT-এর Starter, Growth Pro এবং Enterprise প্যাকেজে কি কি সুবিধা রয়েছে?"
  },
  {
    icon: "🎨",
    label: "UI/UX & Speed",
    prompt: "How can ZoneThinks IT audit and redesign our website to maximize our conversion rate?"
  },
  {
    icon: "📞",
    label: "মিটিং শিডিউল",
    prompt: "ZoneThinks IT টিম বা সিনিয়র আর্কিটেক্টের সাথে একটি ফ্রি স্ট্র্যাটেজি কল বুক করতে চাই।"
  }
];

const INITIAL_MESSAGES: FridayMessage[] = [
  {
    id: 'welcome-1',
    role: 'assistant',
    content: `### 👋 Welcome to ZoneThinks IT!

I am **Friday**, your dedicated AI Solutions Architect. I am here to help you plan, estimate, and engineer high-performance web applications.

Feel free to ask me anything about **project pricing, modern tech stacks (Next.js, React, Cloud), custom features**, or click **Live Voice Call** to talk with me directly in English or বাংলা!`,
    thoughtProcess: `1. Initialized Friday AI with ZoneThinks IT high-performance architecture knowledge base.
2. Ready to assist clients with project scoping, architecture blueprints, and real-time consultation.`,
    timestamp: Date.now()
  }
];

export const FridayChat: React.FC = () => {
  // Fresh, isolated in-memory session for every user & auto-clears on refresh
  const [messages, setMessages] = useState<FridayMessage[]>(INITIAL_MESSAGES);
  const [sessionId] = useState<string>(() => `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMicActive, setIsMicActive] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);

  const chatScrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const speechRecognizerRef = useRef<FridaySpeechRecognizer | null>(null);
  const speechSynthesizerRef = useRef<FridaySpeechSynthesizer | null>(null);

  // Clear any legacy localStorage chat history so each user/session starts clean
  useEffect(() => {
    try {
      localStorage.removeItem('friday_chat_history');
    } catch (e) {
      // Ignore
    }
  }, []);

  // Exit fullscreen on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Auto scroll inside chat container on new message
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    speechSynthesizerRef.current = new FridaySpeechSynthesizer();
    speechRecognizerRef.current = new FridaySpeechRecognizer();

    speechSynthesizerRef.current.onStateChange((speaking) => {
      if (!speaking) {
        setSpeakingMessageId(null);
      }
    });

    return () => {
      speechSynthesizerRef.current?.stop();
      speechRecognizerRef.current?.stop();
    };
  }, []);

  const scrollToBottom = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleSend = async (customPrompt?: string) => {
    const query = (customPrompt || input).trim();
    if (!query || isLoading) return;

    if (isMicActive) {
      speechRecognizerRef.current?.stop();
      setIsMicActive(false);
    }

    const userMessage: FridayMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: Date.now()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await askFriday(query, [...messages, userMessage], false);
      const assistantMessage: FridayMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.reply,
        thoughtProcess: response.thoughtProcess,
        timestamp: Date.now()
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Friday AI Error:', error);
      const errorMessage: FridayMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I encountered a minor communication delay. Please try again or feel free to contact our team directly at `hello@zonethinks.it`.",
        timestamp: Date.now()
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMic = () => {
    if (!speechRecognizerRef.current?.isSupported()) {
      alert("Voice recognition is not supported in this browser. Please use Chrome, Edge, or Safari.");
      return;
    }

    if (isMicActive) {
      speechRecognizerRef.current.stop();
      setIsMicActive(false);
    } else {
      setIsMicActive(true);
      speechRecognizerRef.current.start(
        (text, isFinal) => {
          setInput(text);
          if (isFinal) {
            setIsMicActive(false);
          }
        },
        (listening) => {
          setIsMicActive(listening);
        },
        (err) => {
          console.warn('Speech error', err);
          setIsMicActive(false);
        }
      );
    }
  };

  const handleSpeakToggle = (msg: FridayMessage) => {
    if (!speechSynthesizerRef.current) return;

    if (speakingMessageId === msg.id) {
      speechSynthesizerRef.current.stop();
      setSpeakingMessageId(null);
    } else {
      setSpeakingMessageId(msg.id);
      speechSynthesizerRef.current.speak(
        msg.content,
        'auto',
        () => setSpeakingMessageId(msg.id),
        () => setSpeakingMessageId(null)
      );
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearHistory = () => {
    if (window.confirm("Reset conversation history?")) {
      setMessages(INITIAL_MESSAGES);
      speechSynthesizerRef.current?.stop();
      setSpeakingMessageId(null);
    }
  };

  const handleExportChat = () => {
    const transcript = messages
      .map((m) => `[${m.role.toUpperCase()}] (${new Date(m.timestamp).toLocaleTimeString()}):\n${m.content}\n\n`)
      .join('---\n\n');
    const blob = new Blob([transcript], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `friday-chat-${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={cn(
      "w-full flex flex-col transition-all duration-300 relative",
      isFullscreen
        ? "fixed inset-0 z-50 w-full h-[100dvh] max-h-[100dvh] rounded-none border-0 shadow-2xl bg-slate-50 text-slate-900 dark:bg-[#07090E] dark:text-white backdrop-blur-3xl overflow-hidden"
        : "h-[680px] sm:h-[720px] max-h-[85vh] rounded-3xl border shadow-xl overflow-hidden bg-white/95 border-slate-200/90 text-slate-900 shadow-slate-900/10 dark:bg-[#090D14]/95 dark:border-white/10 dark:text-white dark:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.12)]"
    )}>
      {/* Top Header Bar */}
      <div className="px-3 sm:px-6 py-3 border-b border-slate-200/90 dark:border-white/[0.08] flex items-center justify-between bg-slate-50/95 dark:bg-black/40 backdrop-blur-xl z-30 shrink-0">
        {/* Identity & Status */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-sky-100 dark:bg-brand-cyan/20 border border-sky-300 dark:border-brand-cyan/40 flex items-center justify-center text-sky-700 dark:text-brand-cyan shadow-sm">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600 dark:text-brand-cyan animate-pulse" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-[#090D14] rounded-full" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight">
                Friday <span className="text-sky-600 dark:text-brand-cyan font-mono text-xs font-bold">AI</span>
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-400 font-mono font-bold border border-emerald-300 dark:border-emerald-500/20">
                Online
              </span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium hidden sm:block">
              ZoneThinks IT • Solutions Architect & Consultant
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Live Voice Call Action Button */}
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsVoiceModalOpen(true)}
            className="flex items-center gap-1.5 shadow-md text-xs font-bold px-2.5 sm:px-3 py-1.5 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white"
          >
            <PhoneCall className="w-3.5 h-3.5 animate-pulse text-emerald-200" />
            <span className="hidden xs:inline">Voice Call</span>
          </Button>

          {/* Fullscreen Toggle (Prominent & Clear in Both States) */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className={cn(
              "px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 shadow-sm",
              isFullscreen
                ? "bg-red-500/10 border-red-500/40 text-red-600 dark:text-red-400 hover:bg-red-500/20 font-bold"
                : "border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
            )}
            title={isFullscreen ? "Exit Fullscreen (Esc)" : "Expand to Full Screen"}
          >
            {isFullscreen ? <X className="w-3.5 h-3.5 text-red-500" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{isFullscreen ? "Exit Fullscreen" : "Full Screen"}</span>
          </button>

          {/* Export Chat */}
          <button
            onClick={handleExportChat}
            className="p-2 rounded-xl text-xs border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white transition-colors hidden md:block"
            title="Export Conversation"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

          {/* Reset Chat */}
          <button
            onClick={handleClearHistory}
            className="p-2 rounded-xl text-xs border border-slate-200 bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-red-400 transition-colors"
            title="Clear Chat History"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div 
        ref={chatScrollRef} 
        className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scroll-smooth bg-slate-50/50 dark:bg-transparent"
      >
        {messages.map((msg) => {
          const isAssistant = msg.role === 'assistant';

          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={cn(
                "flex gap-3 sm:gap-4 max-w-3xl",
                isAssistant ? "mr-auto" : "ml-auto flex-row-reverse"
              )}
            >
              {/* Avatar Icon */}
              <div className={cn(
                "w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-xs font-bold shadow-sm",
                isAssistant 
                  ? "bg-sky-100 border border-sky-300 text-sky-700 dark:bg-brand-cyan/20 dark:border-brand-cyan/40 dark:text-brand-cyan" 
                  : "bg-slate-200 border border-slate-300 text-slate-800 dark:bg-white/10 dark:border-white/20 dark:text-white"
              )}>
                {isAssistant ? <Sparkles className="w-4 h-4 text-sky-600 dark:text-brand-cyan" /> : <User className="w-4 h-4 text-slate-700 dark:text-slate-200" />}
              </div>

              {/* Message Bubble Container */}
              <div className="flex-1 max-w-[90%] sm:max-w-[85%]">
                {/* Thinking Process Accordion */}
                {isAssistant && msg.thoughtProcess && (
                  <ThinkingBadge thoughtProcess={msg.thoughtProcess} />
                )}

                {/* Message Bubble */}
                <div className={cn(
                  "p-4 sm:p-5 rounded-2xl text-sm leading-relaxed border transition-all duration-200 shadow-sm",
                  isAssistant
                    ? "bg-white border-slate-200/90 text-slate-900 shadow-slate-900/5 dark:bg-[#111622]/95 dark:border-white/[0.08] dark:text-slate-100"
                    : "bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-semibold border border-sky-500 shadow-md shadow-sky-600/20 rounded-tr-none"
                )}>
                  <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
                    {msg.content.split('\n\n').map((paragraph, pIdx) => {
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h4 key={pIdx} className="font-heading font-extrabold text-base mt-2 mb-1.5 text-slate-950 dark:text-white flex items-center gap-1.5">
                            {paragraph.replace('### ', '')}
                          </h4>
                        );
                      }
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h3 key={pIdx} className="font-heading font-black text-lg mt-3 mb-1.5 text-slate-950 dark:text-white">
                            {paragraph.replace('## ', '')}
                          </h3>
                        );
                      }

                      if (paragraph.startsWith('---')) {
                        return <hr key={pIdx} className="border-slate-200 dark:border-white/10 my-3" />;
                      }

                      if (paragraph.startsWith('- ') || paragraph.startsWith('* ') || paragraph.startsWith('1. ')) {
                        const lines = paragraph.split('\n');
                        return (
                          <ul key={pIdx} className="space-y-1.5 my-2 pl-2">
                            {lines.map((line, lIdx) => (
                              <li key={lIdx} className="flex items-start gap-2 text-slate-800 dark:text-slate-200 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-brand-cyan mt-1.5 shrink-0" />
                                <span>{line.replace(/^[-*]\s+|\d+\.\s+/, '')}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      return (
                        <p key={pIdx} className={cn("leading-relaxed", isAssistant ? "text-slate-800 dark:text-slate-200 font-normal" : "text-white")}>
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>

                {/* Message Actions */}
                {isAssistant && (
                  <div className="flex items-center gap-3 mt-2 px-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
                    <button
                      onClick={() => handleSpeakToggle(msg)}
                      className={cn(
                        "flex items-center gap-1.5 hover:text-sky-700 dark:hover:text-brand-cyan transition-colors",
                        speakingMessageId === msg.id && "text-sky-700 dark:text-brand-cyan font-bold"
                      )}
                      title="Listen"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{speakingMessageId === msg.id ? 'Speaking...' : 'Listen'}</span>
                    </button>

                    <span>•</span>

                    <button
                      onClick={() => handleCopy(msg.id, msg.content)}
                      className="flex items-center gap-1.5 hover:text-sky-700 dark:hover:text-brand-cyan transition-colors"
                      title="Copy"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <span>•</span>

                    <Link
                      to="/contact"
                      className="flex items-center gap-1 text-sky-700 dark:text-brand-cyan hover:underline font-bold"
                    >
                      <span>Book Free Strategy Call</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 mr-auto max-w-3xl"
          >
            <div className="w-8 h-8 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-700 dark:bg-brand-cyan/20 dark:border-brand-cyan/40 dark:text-brand-cyan shadow-sm">
              <Sparkles className="w-4 h-4 animate-spin" />
            </div>
            <div className="flex-1">
              <ThinkingBadge isThinking thoughtProcess="" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Modern Horizontal Quick Prompts Chips */}
      <div className="px-4 sm:px-6 py-2.5 border-t border-slate-200/90 dark:border-white/[0.06] bg-slate-50 dark:bg-black/20 overflow-x-auto flex items-center gap-2 no-scrollbar">
        <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 font-bold shrink-0 flex items-center gap-1 mr-1">
          <Zap className="w-3 h-3 text-sky-600 dark:text-brand-cyan" /> Suggested:
        </span>
        {QUICK_PROMPTS.map((qp, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(qp.prompt)}
            disabled={isLoading}
            className="shrink-0 text-xs px-3.5 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-100 hover:border-sky-400 text-slate-800 hover:text-sky-700 dark:bg-white/[0.04] dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-cyan transition-all duration-200 flex items-center gap-1.5 shadow-sm font-medium"
          >
            <span>{qp.icon}</span>
            <span>{qp.label}</span>
          </button>
        ))}
      </div>

      {/* Floating Pill Input Bar */}
      <div className="p-3 sm:p-4 border-t border-slate-200/90 dark:border-white/[0.08] bg-white/98 dark:bg-[#07090E]/95 backdrop-blur-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="relative flex items-center gap-2 bg-slate-50 dark:bg-black/40 border border-slate-300/90 dark:border-white/10 rounded-2xl p-1.5 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20 dark:focus-within:border-brand-cyan/70 dark:focus-within:shadow-glow-cyan/20 transition-all duration-200"
        >
          {/* Speech Dictation Mic */}
          <button
            type="button"
            onClick={toggleMic}
            className={cn(
              "p-2.5 rounded-xl transition-all duration-200 shrink-0",
              isMicActive
                ? "bg-emerald-500 text-white animate-pulse shadow-md"
                : "text-slate-600 hover:text-sky-700 hover:bg-slate-200/80 dark:text-slate-400 dark:hover:text-brand-cyan dark:hover:bg-white/5"
            )}
            title={isMicActive ? "Listening (Click to stop)" : "Speech-to-Text Dictation"}
          >
            {isMicActive ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          </button>

          {/* Text Input */}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              isMicActive
                ? "Listening to your voice..."
                : "Ask Friday about web development, pricing, or tech stacks..."
            }
            disabled={isLoading}
            className="flex-1 bg-transparent px-2 py-2 text-sm text-slate-900 placeholder:text-slate-500 dark:text-white dark:placeholder:text-slate-400 outline-none font-medium"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={cn(
              "p-2.5 rounded-xl font-medium transition-all duration-200 flex items-center justify-center shrink-0",
              input.trim() && !isLoading
                ? "bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-md hover:brightness-110 cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed opacity-60 dark:bg-white/5 dark:text-slate-500"
            )}
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Voice Call Modal */}
      <FridayVoiceModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        onNewMessage={(msg) => setMessages((prev) => [...prev, msg])}
      />
    </div>
  );
};
