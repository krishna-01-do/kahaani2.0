import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { guideTopics } from '@/data/guide';
import type { GuideTopic } from '@/data/types';

interface GuideProps {
  topicId: string | null;
  onSelectTopic: (id: string | null) => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

const topicIcons: Record<string, { emoji: string; color: string }> = {
  'being-shy': { emoji: '🫣', color: '#FF8A3D' },
  'making-the-first-move': { emoji: '👋', color: '#FF3D77' },
  'the-talking-stage': { emoji: '💬', color: '#8B5CF6' },
  'relationships': { emoji: '🤝', color: '#22D3EE' },
  'breakups': { emoji: '💔', color: '#C24A5B' },
  'heartbreak': { emoji: '🫀', color: '#C6FF3D' },
};

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Guide({ topicId, onSelectTopic }: GuideProps) {
  const activeTopic: GuideTopic | undefined = topicId ? guideTopics.find((t) => t.id === topicId) : undefined;

  if (activeTopic) {
    return (
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-16">
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease }}
          onClick={() => onSelectTopic(null)}
          className="flex items-center gap-1.5 font-mono text-sm text-body hover:text-heading transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
          All topics
        </motion.button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--color-romance)' }}>{activeTopic.eyebrow}</p>
          <h1 className="font-display text-3xl sm:text-5xl font-700 text-heading leading-tight mb-8">{activeTopic.title}</h1>
          <div className="space-y-7">
            {activeTopic.body.map((section, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
              >
                <h2 className="font-display text-xl font-600 text-heading mb-2">{section.heading}</h2>
                <p className="font-body text-body leading-[1.75] text-[17px]">{section.text}</p>
              </motion.section>
            ))}
          </div>
        </motion.article>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint mb-4">Keep reading</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {guideTopics
              .filter((t) => t.id !== activeTopic.id)
              .slice(0, 4)
              .map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    onSelectTopic(t.id);
                    window.scrollTo({ top: 0 });
                  }}
                  className="group glass glass-hover flex items-center justify-between rounded-xl px-5 py-4 transition-all text-left"
                >
                  <div>
                    <p className="font-mono text-[10px] tracking-wider uppercase mb-1" style={{ color: 'var(--color-romance)' }}>{t.eyebrow}</p>
                    <p className="font-display text-base font-600 text-heading">{t.title}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-faint group-hover:text-heading transition-colors shrink-0" strokeWidth={1.75} />
                </button>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-faint mb-3"
      >
        The Guide
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.05 }}
        className="font-display text-3xl sm:text-5xl font-700 text-heading mb-3"
      >
        Six topics, no filler
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
        className="font-body text-lg text-body max-w-2xl mb-10"
      >
        Plain-language articles on the parts of relationships that matter — written for an Indian
        context, grounded in honesty and consent.
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {guideTopics.map((t, i) => {
          const icon = topicIcons[t.id] ?? { emoji: '✨', color: '#FF8A3D' };
          return (
            <Reveal key={t.id} delay={i * 0.06}>
              <button
                onClick={() => onSelectTopic(t.id)}
                className="group glass glass-hover w-full text-left rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1.5 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase" style={{ color: icon.color }}>{t.eyebrow}</p>
                  <motion.span
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl"
                  >
                    {icon.emoji}
                  </motion.span>
                </div>
                <h3 className="font-display text-2xl font-600 text-heading mb-3">{t.title}</h3>
                <p className="font-body text-sm text-body leading-relaxed flex-1">{t.teaser}</p>
                <div className="mt-5 flex items-center gap-1.5 font-mono text-xs group-hover:gap-2.5 transition-all" style={{ color: 'var(--color-romance-2)' }}>
                  Read article <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
