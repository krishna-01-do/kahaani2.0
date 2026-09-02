import { motion } from 'framer-motion';
import { ArrowRight, Compass, MessageCircleHeart, ShoppingBag } from 'lucide-react';
import type { Tab } from './Nav';
import { scenarios } from '@/data/scenarios';
import { guideTopics } from '@/data/guide';
import { Feedback } from './Feedback';
import { BannerAd468x60 } from './Ads';

interface HomeProps {
  onNavigate: (tab: Tab, opts?: { scenarioId?: string; topicId?: string }) => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

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

export function Home({ onNavigate }: HomeProps) {
  const featuredScenario = scenarios[0];
  const previewTopics = guideTopics.slice(0, 3);

  const headlineLines = ['Every love story', 'has a first scene.'];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Aura blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="aura-blob absolute -top-20 -left-10 w-[420px] h-[420px] rounded-full opacity-30 blur-[100px]"
            style={{ background: 'radial-gradient(circle, #FF3D77, transparent 70%)' }}
          />
          <div
            className="aura-blob-2 absolute top-10 right-0 w-[380px] h-[380px] rounded-full opacity-25 blur-[100px]"
            style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }}
          />
          <div
            className="aura-blob absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full opacity-20 blur-[90px]"
            style={{ background: 'radial-gradient(circle, #22D3EE, transparent 70%)' }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 pt-20 sm:pt-32 pb-24 sm:pb-40 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-faint mb-6"
          >
            <span className="gradient-romance">Every Love Story. Every Message. Every Moment.</span>
          </motion.p>

          <h1 className="font-display font-700 text-heading leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(2.75rem, 8vw, 6.875rem)' }}>
            {headlineLines.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.15 + li * 0.12 }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="mt-8 mx-auto max-w-2xl font-body text-lg sm:text-xl text-body leading-relaxed"
          >
            Toolorna is an honest guide to relationships in an Indian context — the shyness, the
            first move, the talking stage, the relationship, and sometimes the breakup and the
            heartbreak after. No manipulation, no scripts. Just real stories and grounded advice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('scenarios')}
              className="group btn-romance flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-sm font-700 glow-romance"
            >
              <Compass className="w-4 h-4" strokeWidth={2} />
              Read a scenario
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('ask')}
              className="group glass glass-hover flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-sm text-heading"
            >
              <MessageCircleHeart className="w-4 h-4" strokeWidth={2} />
              Ask a doubt
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('shop')}
              className="group glass glass-hover flex items-center gap-2 px-7 py-3.5 rounded-full font-mono text-sm text-heading"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={2} />
              Shop guides
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Banner ad */}
      <div className="flex justify-center py-6 border-t border-white/5">
        <BannerAd468x60 />
      </div>

      {/* Guide preview */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint mb-2">The Guide</p>
                <h2 className="font-display text-2xl sm:text-3xl font-700 text-heading">Six topics, no filler</h2>
              </div>
              <button
                onClick={() => onNavigate('guide')}
                className="hidden sm:flex items-center gap-1.5 font-mono text-sm text-body hover:text-heading transition-colors"
              >
                All topics <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
              </button>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewTopics.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08}>
                <button
                  onClick={() => onNavigate('guide', { topicId: t.id })}
                  className="group glass glass-hover w-full text-left rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
                >
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--color-romance)' }}>{t.eyebrow}</p>
                  <h3 className="font-display text-xl font-600 text-heading mb-2">{t.title}</h3>
                  <p className="font-body text-sm text-body leading-relaxed">{t.teaser}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Banner ad */}
      <div className="flex justify-center py-6 border-t border-white/5">
        <BannerAd468x60 />
      </div>

      {/* Featured scenario preview */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint mb-2">A Scenario</p>
                <h2 className="font-display text-2xl sm:text-3xl font-700 text-heading">
                  {featuredScenario.setting} — {featuredScenario.city}
                </h2>
              </div>
              <button
                onClick={() => onNavigate('scenarios')}
                className="hidden sm:flex items-center gap-1.5 font-mono text-sm text-body hover:text-heading transition-colors"
              >
                All scenarios <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <button
              onClick={() => onNavigate('scenarios', { scenarioId: featuredScenario.id })}
              className="group glass glass-hover block w-full text-left rounded-3xl p-8 sm:p-10 transition-all duration-200 hover:-translate-y-1"
            >
              <p className="font-body text-lg text-body leading-relaxed mb-6">{featuredScenario.blurb}</p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <p className="font-mono text-[11px] tracking-wider uppercase text-faint mb-1">Him</p>
                  <p className="font-display text-lg font-600 text-heading">{featuredScenario.hisName}</p>
                  <p className="font-body text-xs text-faint">{featuredScenario.hisRole}</p>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <p className="font-mono text-[11px] tracking-wider uppercase text-faint mb-1">Her</p>
                  <p className="font-display text-lg font-600 text-heading">{featuredScenario.herName}</p>
                  <p className="font-body text-xs text-faint">{featuredScenario.herRole}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-sm group-hover:gap-3 transition-all" style={{ color: 'var(--color-romance-2)' }}>
                Read the 9 chapters <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
              </div>
            </button>
          </Reveal>
        </div>
      </section>

      {/* Shop preview */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint mb-2">Shop</p>
                <h2 className="font-display text-2xl sm:text-3xl font-700 text-heading">Guides that go deeper</h2>
              </div>
              <button
                onClick={() => onNavigate('shop')}
                className="hidden sm:flex items-center gap-1.5 font-mono text-sm text-body hover:text-heading transition-colors"
              >
                Visit shop <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <button
              onClick={() => onNavigate('shop')}
              className="group glass glass-hover block w-full text-left rounded-3xl p-8 sm:p-10 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="shrink-0 w-24 h-32 rounded-xl overflow-hidden">
                  <img src="/products/relationships/thumbnails/ChatGPT_Image_Aug_25,_2026,_12_17_55_PM.png" alt="Guide cover" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[11px] tracking-wider uppercase mb-2" style={{ color: 'var(--color-romance-2)' }}>PDF Guide</p>
                  <h3 className="font-display text-xl sm:text-2xl font-600 text-heading mb-2">How to Make Any Girl or Boy Fall for You in 7 Days</h3>
                  <p className="font-body text-sm text-body leading-relaxed mb-4">The Ultimate Indian Psychology Guide to Win Their Heart. A 7-day action plan with 3 free bonuses inside.</p>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-700 text-heading">₹149</span>
                    <span className="font-mono text-xs text-faint">one-time · instant download</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-sm group-hover:gap-3 transition-all" style={{ color: 'var(--color-romance-2)' }}>
                View details & buy <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
              </div>
            </button>
          </Reveal>
        </div>
      </section>

      {/* Feedback */}
      <Feedback />
    </div>
  );
}
