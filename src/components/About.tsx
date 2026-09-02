import { motion } from 'framer-motion';
import { Heart, Compass, BookOpen, MessageCircleHeart, Shield } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    icon: Heart,
    title: 'Respect first',
    text: 'Every story, every answer starts with treating the other person as a person — not a target.',
  },
  {
    icon: Shield,
    title: 'No manipulation',
    text: 'No pickup-artist tricks, no pressure tactics, no games. Just honest, direct communication.',
  },
  {
    icon: Compass,
    title: 'Indian context',
    text: 'Family, office, college, mutual friends — we talk about relationships the way they actually happen here.',
  },
  {
    icon: MessageCircleHeart,
    title: 'Both sides',
    text: 'Every scenario shows what he is thinking and what she is thinking, so you learn to read the other person.',
  },
];

export function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mb-10"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Heart className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint">About</p>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-700 text-heading mb-4">
          What is Toolorna?
        </h1>
        <p className="font-body text-lg text-body leading-relaxed">
          Toolorna is a relationship-guidance platform built for the Indian context. We help people
          navigate attraction, shyness, the talking stage, relationships, and breakups — through
          realistic stories, a practical guide, and an AI assistant you can ask anything.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
        className="glass rounded-2xl p-6 sm:p-8 mb-10"
      >
        <h2 className="font-display text-xl sm:text-2xl font-700 text-heading mb-3">Who runs it</h2>
        <p className="font-body text-[15px] text-body leading-[1.75]">
          Toolorna is an independent project. It is not affiliated with any clinic, hospital, or
          professional psychology practice. The content is created and curated by a small team that
          cares about helping people build healthy, honest relationships in a culture where these
          conversations rarely happen openly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.15 }}
        className="mb-10"
      >
        <h2 className="font-display text-xl sm:text-2xl font-700 text-heading mb-5">What we believe</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: 0.2 + i * 0.06 }}
              className="glass rounded-2xl p-5"
            >
              <v.icon className="w-5 h-5 mb-3" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
              <h3 className="font-display text-base font-600 text-heading mb-1">{v.title}</h3>
              <p className="font-body text-sm text-body leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.25 }}
        className="glass rounded-2xl p-6 sm:p-8"
      >
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-calm-2)' }} />
          <p className="font-mono text-[11px] tracking-wider uppercase text-faint">A note</p>
        </div>
        <p className="font-body text-[15px] text-body leading-[1.75]">
          Everything on Toolorna is meant to help you think — not to think for you. Trust your own
          reading of the situation, listen to the other person, and when something feels off, talk
          to someone you trust. If you are in distress, please reach out to a professional.
        </p>
      </motion.div>
    </div>
  );
}
