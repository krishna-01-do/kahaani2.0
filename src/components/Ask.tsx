import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircleHeart, AlertCircle, User, Sparkles, X } from 'lucide-react';
import { BannerAd468x60 } from './Ads';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  text: "Hi, I'm Ask Toolorna. Tell me what's on your mind — a crush you're unsure about, a talking stage that's stuck, a breakup that hurts. I'll give you honest, grounded thoughts, not scripts.",
};

const spring = { type: 'spring', stiffness: 400, damping: 28 } as const;

export function Ask() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fabOpen, setFabOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', text };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput('');
    setError(null);
    setLoading(true);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ask-toolorna`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      if (!response.ok) throw new Error('request-failed');

      const data = await response.json();
      if (!data || typeof data.reply !== 'string') throw new Error('bad-response');

      setMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
    } catch {
      setError("Something went wrong reaching the AI. Please try again in a moment.");
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const chatContent = (
    <>
      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={spring}
              className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: m.role === 'user' ? 'linear-gradient(135deg, #FF3D77, #FF8A3D)' : 'rgba(139,92,246,0.18)',
                }}
              >
                {m.role === 'user' ? (
                  <User className="w-4 h-4 text-white" strokeWidth={1.75} />
                ) : (
                  <Sparkles className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-calm-2)' }} />
                )}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  m.role === 'user'
                    ? 'text-white'
                    : 'glass text-body'
                }`}
                style={
                  m.role === 'user'
                    ? { background: 'linear-gradient(135deg, #FF3D77, #FF8A3D)' }
                    : undefined
                }
              >
                <p className="font-body text-[15px] leading-relaxed whitespace-pre-wrap" style={{ color: m.role === 'user' ? '#fff' : 'var(--color-body)' }}>{m.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={spring} className="flex gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(139,92,246,0.18)' }}>
              <Sparkles className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-calm-2)' }} />
            </div>
            <div className="glass rounded-2xl rounded-tl-sm px-5 py-4">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bounce-dot" style={{ background: '#FF3D77', animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bounce-dot" style={{ background: '#FF8A3D', animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bounce-dot" style={{ background: '#8B5CF6', animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 sm:mx-6 mb-3"
          >
            <div className="flex items-start gap-2 text-sm rounded-xl px-4 py-3" style={{ background: 'rgba(255,61,119,0.08)', border: '1px solid rgba(255,61,119,0.25)', color: 'var(--color-romance)' }}>
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={1.75} />
              <p className="font-body leading-relaxed">{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div className="border-t border-white/10 p-3 sm:p-4 flex items-end gap-2">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          rows={1}
          placeholder="Type your doubt..."
          className="flex-1 resize-none glass rounded-xl px-4 py-3 font-body text-[15px] text-heading placeholder:text-faint focus:outline-none transition-colors max-h-32"
          style={{ color: 'var(--color-heading)' }}
          disabled={loading}
        />
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={send}
          disabled={!input.trim() || loading}
          className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed transition-opacity"
          style={{
            background: loading ? 'rgba(139,92,246,0.3)' : 'linear-gradient(135deg, #FF3D77, #FF8A3D)',
            boxShadow: loading ? '0 0 24px -4px rgba(139,92,246,0.6)' : '0 0 24px -6px rgba(255,61,119,0.5)',
          }}
          aria-label="Send message"
        >
          <Send className="w-4 h-4 text-white" strokeWidth={2} />
        </motion.button>
      </div>
    </>
  );

  return (
    <>
      {/* Inline section */}
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2.5 mb-2">
            <MessageCircleHeart className="w-5 h-5" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint">Ask Toolorna</p>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-700 text-heading mb-3">Ask your doubt</h1>
          <p className="font-body text-lg text-body mb-8">
            A real conversation about attraction, the talking stage, relationships, breakups, and
            heartbreak — grounded in honesty and consent, not pickup tactics.
          </p>
        </motion.div>

        {/* Glass panel with gradient glow border */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative"
        >
          {/* Gradient glow border wrapper */}
          <div className="relative rounded-3xl p-px" style={{ background: 'linear-gradient(135deg, rgba(255,61,119,0.4), rgba(139,92,246,0.4), rgba(34,211,238,0.3))' }}>
            <div className="glass rounded-3xl flex flex-col h-[60vh] min-h-[420px] overflow-hidden">
              {chatContent}
            </div>
          </div>
        </motion.div>

        <p className="mt-4 font-mono text-[11px] text-faint text-center leading-relaxed">
          Ask Toolorna gives general guidance, not professional advice. If you're in distress or
          unsafe, please reach out to a trusted person or a professional.
        </p>

        {/* Banner ad */}
        <div className="mt-8 flex justify-center">
          <BannerAd468x60 />
        </div>
      </div>

      {/* Floating action button (mobile-style overlay) */}
      <div className="fixed bottom-5 right-5 z-50 sm:hidden">
        <AnimatePresence>
          {fabOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={spring}
              className="absolute bottom-16 right-0 w-[88vw] max-w-sm h-[70vh] rounded-3xl p-px"
              style={{ background: 'linear-gradient(135deg, rgba(255,61,119,0.4), rgba(139,92,246,0.4))' }}
            >
              <div className="glass rounded-3xl h-full flex flex-col overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <p className="font-display font-600 text-heading">Ask Toolorna</p>
                  <button onClick={() => setFabOpen(false)} className="w-8 h-8 rounded-full glass glass-hover flex items-center justify-center">
                    <X className="w-4 h-4 text-body" strokeWidth={2} />
                  </button>
                </div>
                {chatContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setFabOpen((v) => !v)}
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #FF3D77, #FF8A3D)', boxShadow: '0 0 32px -6px rgba(255,61,119,0.6)' }}
          aria-label="Open Ask Toolorna chat"
        >
          {fabOpen ? <X className="w-6 h-6 text-white" strokeWidth={2} /> : <MessageCircleHeart className="w-6 h-6 text-white" strokeWidth={2} />}
        </motion.button>
      </div>
    </>
  );
}
