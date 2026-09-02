import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Loader2, Check } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

const ease = [0.22, 1, 0.36, 1] as const;

export function Feedback() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  const submit = async () => {
    const text = message.trim();
    if (!text || status === 'submitting') return;

    setStatus('submitting');
    try {
      const { error } = await supabase.from('feedback').insert({
        name: name.trim() || null,
        message: text,
      });
      if (error) throw error;
      setStatus('done');
      setName('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint">Feedback</p>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-700 text-heading mb-2">
            Tell us what you think
          </h2>
          <p className="font-body text-base text-body mb-8">
            Found something helpful? Something missing? Spill it — we read every word.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="relative rounded-3xl p-px"
          style={{ background: 'linear-gradient(135deg, rgba(255,61,119,0.35), rgba(139,92,246,0.35), rgba(34,211,238,0.25))' }}
        >
          <div className="glass rounded-3xl p-6 sm:p-8 text-left">
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
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, #FF3D77, #FF8A3D)' }}
                  >
                    <Check className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="font-display text-xl font-600 text-heading mb-1">Thank you!</p>
                  <p className="font-body text-sm text-body">Your feedback means a lot.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-5 font-mono text-sm text-body hover:text-heading transition-colors"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (optional)"
                    className="w-full glass rounded-xl px-4 py-3 font-body text-[15px] text-heading placeholder:text-faint focus:outline-none transition-colors"
                    style={{ color: 'var(--color-heading)' }}
                    disabled={status === 'submitting'}
                  />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your thoughts..."
                    rows={4}
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
                        Something went wrong. Please try again.
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={submit}
                    disabled={!message.trim() || status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-sm font-700 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                    style={{
                      background: 'linear-gradient(135deg, #FF3D77, #FF8A3D)',
                      boxShadow: '0 0 24px -6px rgba(255,61,119,0.5)',
                    }}
                  >
                    {status === 'submitting' ? (
                      <Loader2 className="w-4 h-4 text-white animate-spin" strokeWidth={2} />
                    ) : (
                      <Heart className="w-4 h-4 text-white" strokeWidth={2} />
                    )}
                    {status === 'submitting' ? 'Sending...' : 'Send feedback'}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
