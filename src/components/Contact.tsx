import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Loader2, Check, Send } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const SUPPORT_EMAIL = 'allearnhelp@gmail.com';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  const submit = async () => {
    const text = message.trim();
    if (!text || !email.trim() || status === 'submitting') return;

    setStatus('submitting');
    try {
      const res = await fetch(`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Contact from ' + (name.trim() || 'a visitor'))}&body=${encodeURIComponent(`${text}\n\nFrom: ${name.trim() || 'Anonymous'}\nReply to: ${email.trim()}`)}`);
      if (!res && false) throw new Error('failed');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-8 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Mail className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint">Contact</p>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-700 text-heading mb-3">
          Get in touch
        </h1>
        <p className="font-body text-lg text-body leading-relaxed">
          Questions, feedback, or just something to share? We read everything and reply as fast as
          we can.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
        className="glass rounded-2xl p-6 sm:p-8 mb-8"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(255,61,119,0.12)' }}>
            <Mail className="w-5 h-5" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-wider uppercase text-faint">Email us directly</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-display text-base font-600 text-heading hover:opacity-80 transition-opacity">
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.15 }}
        className="relative rounded-3xl p-px"
        style={{ background: 'linear-gradient(135deg, rgba(255,61,119,0.35), rgba(139,92,246,0.35), rgba(34,211,238,0.25))' }}
      >
        <div className="glass rounded-3xl p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {status === 'done' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease }}
                className="flex flex-col items-center text-center py-6"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #FF3D77, #FF8A3D)' }}>
                  <Check className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <p className="font-display text-xl font-600 text-heading mb-1">Your email is ready</p>
                <p className="font-body text-sm text-body max-w-sm">
                  Your email app should have opened. If it didn't, send your message directly to{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="underline" style={{ color: 'var(--color-romance-2)' }}>{SUPPORT_EMAIL}</a>.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-5 font-mono text-sm text-body hover:text-heading transition-colors">
                  Write another
                </button>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (optional)"
                  className="w-full glass rounded-xl px-4 py-3 font-body text-[15px] text-heading placeholder:text-faint focus:outline-none transition-colors"
                  style={{ color: 'var(--color-heading)' }}
                  disabled={status === 'submitting'}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email *"
                  className="w-full glass rounded-xl px-4 py-3 font-body text-[15px] text-heading placeholder:text-faint focus:outline-none transition-colors"
                  style={{ color: 'var(--color-heading)' }}
                  disabled={status === 'submitting'}
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message *"
                  rows={5}
                  className="w-full resize-none glass rounded-xl px-4 py-3 font-body text-[15px] text-heading placeholder:text-faint focus:outline-none transition-colors"
                  style={{ color: 'var(--color-heading)' }}
                  disabled={status === 'submitting'}
                />

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="font-body text-sm"
                      style={{ color: 'var(--color-romance)' }}
                    >
                      Something went wrong. Please email us directly at {SUPPORT_EMAIL}.
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={submit}
                  disabled={!message.trim() || !email.trim() || status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-sm font-700 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #FF3D77, #FF8A3D)', boxShadow: '0 0 24px -6px rgba(255,61,119,0.5)' }}
                >
                  {status === 'submitting' ? (
                    <Loader2 className="w-4 h-4 text-white animate-spin" strokeWidth={2} />
                  ) : (
                    <Send className="w-4 h-4 text-white" strokeWidth={2} />
                  )}
                  {status === 'submitting' ? 'Opening...' : 'Send message'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
