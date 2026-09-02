import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, User, UserRound, Lightbulb, Ban, MessageSquare, BookOpen, Compass } from 'lucide-react';
import { scenarios } from '@/data/scenarios';
import type { Scenario } from '@/data/types';
import { RectangleAd300x250 } from './Ads';

interface ScenariosProps {
  scenarioId: string | null;
  chapterNum: number | null;
  onSelectScenario: (id: string | null) => void;
  onSelectChapter: (num: number) => void;
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

function ProgressRing({ progress, size = 56 }: { progress: number; size?: number }) {
  const stroke = 2.5;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  return (
    <svg className="progress-ring" width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#ring-grad)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={circ - (progress / 100) * circ}
      />
      <defs>
        <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3D77" />
          <stop offset="100%" stopColor="#FF8A3D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Scenarios({ scenarioId, chapterNum, onSelectScenario, onSelectChapter }: ScenariosProps) {
  const activeScenario: Scenario | undefined = scenarioId ? scenarios.find((s) => s.id === scenarioId) : undefined;
  const activeIdx = chapterNum !== null ? chapterNum - 1 : 0;
  const [direction, setDirection] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeScenario || !railRef.current) return;
    const activeEl = railRef.current.querySelector<HTMLElement>(`[data-chap="${activeIdx}"]`);
    activeEl?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeIdx, activeScenario]);

  const goTo = (newIdx: number) => {
    setDirection(newIdx > activeIdx ? 1 : -1);
    onSelectChapter(newIdx + 1);
  };

  // --- Scenario list view ---
  if (!activeScenario) {
    return (
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex items-center gap-2 mb-3">
          <Compass className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint">All stories free</p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-faint mb-3"
        >
          Scenarios
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          className="font-display text-3xl sm:text-5xl font-700 text-heading mb-3"
        >
          Stories from start to commitment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="font-body text-lg text-body max-w-2xl mb-10"
        >
          Each scenario follows two people through nine chapters — from the first notice to meeting
          family. You see both sides think, not just one.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {scenarios.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <button
                onClick={() => {
                  onSelectScenario(s.id);
                  onSelectChapter(1);
                  window.scrollTo({ top: 0 });
                }}
                className="group glass glass-hover w-full text-left rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1.5 flex flex-col relative"
              >
                <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-faint mb-3">
                  <MapPin className="w-3 h-3" strokeWidth={1.75} />
                  {s.city}
                </div>
                <h3 className="font-display text-2xl font-600 text-heading mb-2">{s.setting}</h3>
                <p className="font-body text-sm text-body leading-relaxed flex-1">{s.blurb}</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-body text-sm text-faint">{s.hisName} & {s.herName}</p>
                  <span className="font-mono text-xs flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color: 'var(--color-romance-2)' }}>
                    Read <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Rectangle ad after scenarios grid */}
        <div className="mt-10 flex justify-center">
          <RectangleAd300x250 />
        </div>

      </div>
    );
  }

  const chapter = activeScenario.chapters[activeIdx];
  const total = activeScenario.chapters.length;
  const progressPct = ((activeIdx + 1) / total) * 100;

  return (
    <div>
      {/* Scenario header */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 sm:py-10">
          <motion.button
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease }}
            onClick={() => onSelectScenario(null)}
            className="flex items-center gap-1.5 font-mono text-sm text-body hover:text-heading transition-colors mb-5"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            All scenarios
          </motion.button>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-faint mb-2">
                <MapPin className="w-3 h-3" strokeWidth={1.75} />
                {activeScenario.city}
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-700 text-heading">{activeScenario.setting}</h1>
            </div>
            <div className="flex items-center gap-5 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,61,119,0.15)' }}>
                  <User className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
                </div>
                <div>
                  <p className="font-display font-600 text-heading">{activeScenario.hisName}</p>
                  <p className="font-body text-xs text-faint">{activeScenario.hisRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(139,92,246,0.15)' }}>
                  <UserRound className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-calm)' }} />
                </div>
                <div>
                  <p className="font-display font-600 text-heading">{activeScenario.herName}</p>
                  <p className="font-body text-xs text-faint">{activeScenario.herRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stories rail tracker */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-6 pb-2">
        <div ref={railRef} className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
          {activeScenario.chapters.map((c, i) => {
            const isActive = i === activeIdx;
            const isRead = i < activeIdx;
            const ringProgress = isActive ? 100 : isRead ? 100 : 0;
            return (
              <button
                key={c.num}
                data-chap={i}
                onClick={() => goTo(i)}
                className="group shrink-0 flex flex-col items-center gap-2"
                aria-label={`Chapter ${c.num}: ${c.title}`}
              >
                <div className="relative">
                  <ProgressRing progress={ringProgress} size={56} />
                  <div
                    className="absolute inset-1.5 rounded-full flex items-center justify-center font-mono text-sm font-700 transition-colors"
                    style={{
                      background: isActive ? 'linear-gradient(135deg, #FF3D77, #FF8A3D)' : 'rgba(255,255,255,0.06)',
                      color: isActive ? '#fff' : 'var(--color-body)',
                    }}
                  >
                    {c.num}
                  </div>
                </div>
                <span
                  className="font-mono text-[10px] tracking-wide uppercase whitespace-nowrap transition-colors"
                  style={{ color: isActive ? 'var(--color-heading)' : 'var(--color-faint)' }}
                >
                  {c.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating progress indicator */}
      <div className="sticky top-20 z-30 mx-auto max-w-6xl px-5 sm:px-8 py-2 pointer-events-none">
        <div className="flex justify-center">
          <div className="glass rounded-full px-4 py-1.5 flex items-center gap-2 pointer-events-auto">
            <span className="font-mono text-xs text-heading">Chapter {chapter.num} of {total}</span>
            <span className="text-faint">·</span>
            <span className="font-mono text-xs text-faint">{chapter.timeframe}</span>
          </div>
        </div>
      </div>

      {/* Detail panel */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-6 sm:py-10">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease }}
            >
              <h2 className="font-display text-2xl sm:text-3xl font-700 text-heading mb-6">{chapter.title}</h2>

              {/* Story */}
              <p className="font-body text-[17px] text-body leading-[1.75] mb-8">{chapter.story}</p>

              {/* His / Her side panels */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="glass rounded-2xl p-5 relative overflow-hidden"
                  style={{ borderColor: 'rgba(255,61,119,0.25)' }}
                >
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-20 blur-2xl"
                    style={{ background: 'radial-gradient(circle, #FF3D77, transparent 70%)' }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <User className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
                      <p className="font-mono text-[11px] tracking-wider uppercase" style={{ color: 'var(--color-romance)' }}>
                        {activeScenario.hisName} — his thought
                      </p>
                    </div>
                    <p className="font-body text-body italic leading-relaxed">"{chapter.his}"</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="glass rounded-2xl p-5 relative overflow-hidden"
                  style={{ borderColor: 'rgba(139,92,246,0.25)' }}
                >
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-20 blur-2xl"
                    style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <UserRound className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-calm)' }} />
                      <p className="font-mono text-[11px] tracking-wider uppercase" style={{ color: 'var(--color-calm-2)' }}>
                        {activeScenario.herName} — her thought
                      </p>
                    </div>
                    <p className="font-body text-body italic leading-relaxed">"{chapter.her}"</p>
                  </div>
                </motion.div>
              </div>

              {/* Message exchange */}
              {chapter.messages.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-calm-2)' }} />
                    <p className="font-mono text-[11px] tracking-wider uppercase text-faint">How it played out</p>
                  </div>
                  <div className="glass rounded-2xl p-5 sm:p-6 space-y-4">
                    {chapter.messages.map((msg, i) => {
                      const isHim = msg.from === 'him';
                      return (
                        <div key={i} className={`flex ${isHim ? 'justify-end' : 'justify-start'}`}>
                          <div className="max-w-[80%]">
                            <div
                              className="rounded-2xl px-4 py-2.5"
                              style={
                                isHim
                                  ? { background: 'linear-gradient(135deg, rgba(255,61,119,0.15), rgba(255,138,61,0.15))', border: '1px solid rgba(255,61,119,0.2)' }
                                  : { background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }
                              }
                            >
                              <p className="font-body text-[15px] leading-relaxed" style={{ color: 'var(--color-heading)' }}>{msg.text}</p>
                            </div>
                            {msg.time && <p className="font-mono text-[10px] text-faint mt-1.5 text-right">{msg.time}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Deep dive */}
              {chapter.deepDive && (
                <div className="mb-8 rounded-2xl p-5" style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.15)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-calm-2)' }} />
                    <p className="font-mono text-[11px] tracking-wider uppercase" style={{ color: 'var(--color-calm-2)' }}>Going deeper</p>
                  </div>
                  <p className="font-body text-[15px] text-body leading-[1.75]">{chapter.deepDive}</p>
                </div>
              )}

              {/* Takeaway + Don't */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="rounded-2xl p-5" style={{ background: 'rgba(198,255,61,0.06)', border: '1px solid rgba(198,255,61,0.2)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-lime)' }} />
                    <p className="font-mono text-[11px] tracking-wider uppercase" style={{ color: 'var(--color-lime)' }}>Takeaway</p>
                  </div>
                  <p className="font-body text-body leading-relaxed">{chapter.tip}</p>
                </div>
                <div className="rounded-2xl p-5" style={{ background: 'rgba(255,61,119,0.06)', border: '1px solid rgba(255,61,119,0.2)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Ban className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
                    <p className="font-mono text-[11px] tracking-wider uppercase" style={{ color: 'var(--color-romance)' }}>Don't</p>
                  </div>
                  <p className="font-body text-body leading-relaxed">{chapter.dont}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <button
              onClick={() => goTo(activeIdx - 1)}
              disabled={activeIdx === 0}
              className="flex items-center gap-1.5 font-mono text-sm text-heading disabled:opacity-25 disabled:cursor-not-allowed hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="h-1 w-24 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${progressPct}%`, background: 'linear-gradient(90deg, #FF3D77, #FF8A3D)' }} />
              </div>
              <span className="font-mono text-xs text-faint">{activeIdx + 1}/{total}</span>
            </div>
            <button
              onClick={() => goTo(activeIdx + 1)}
              disabled={activeIdx === total - 1}
              className="flex items-center gap-1.5 font-mono text-sm text-heading disabled:opacity-25 disabled:cursor-not-allowed hover:opacity-80 transition-opacity"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
