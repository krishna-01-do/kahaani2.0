import { motion } from 'framer-motion';
import { BookOpen, Compass, MessageCircleHeart, Home as HomeIcon, Sun, Moon, ShoppingBag, PenLine } from 'lucide-react';
import { useScrollProgress } from './useScrollProgress';
import { useTheme } from './ThemeProvider';

export type Tab = 'home' | 'guide' | 'scenarios' | 'blog' | 'ask' | 'shop' | 'about' | 'contact' | 'privacy' | 'terms';

interface NavProps {
  active: Tab;
  onNavigate: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; icon: typeof HomeIcon }[] = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'guide', label: 'Guide', icon: BookOpen },
  { id: 'scenarios', label: 'Scenarios', icon: Compass },
  { id: 'blog', label: 'Blog', icon: PenLine },
  { id: 'shop', label: 'Shop', icon: ShoppingBag },
  { id: 'ask', label: 'Ask', icon: MessageCircleHeart },
];

export function Nav({ active, onNavigate }: NavProps) {
  const progress = useScrollProgress();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="border-x-0 border-t-0"
        style={{
          background: theme === 'dark' ? 'rgba(11, 10, 16, 0.94)' : 'rgba(251, 247, 238, 0.94)',
          borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(43,42,61,0.14)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="font-display text-xl sm:text-2xl font-700 tracking-tight text-heading hover:opacity-80 transition-opacity"
            aria-label="Toolorna home"
          >
            <span className="gradient-romance">Toolorna</span>
          </button>

          <div className="flex items-center gap-1 sm:gap-1.5">
            {tabs.map(({ id, label, icon: Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className="relative flex items-center gap-1.5 px-2.5 sm:px-4 py-2 rounded-full text-sm font-mono transition-colors duration-200"
                  style={{ color: isActive ? 'var(--color-heading)' : 'var(--color-body)' }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center gap-1.5">
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                    <span className="hidden sm:inline">{label}</span>
                  </span>
                </button>
              );
            })}
            <button
              onClick={toggle}
              className="ml-1 w-9 h-9 rounded-full glass glass-hover flex items-center justify-center text-body hover:text-heading transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" strokeWidth={1.75} /> : <Moon className="w-4 h-4" strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Scroll progress bar */}
      <div className="h-0.5 w-full" style={{ background: 'var(--color-glass)' }}>
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #FF3D77, #FF8A3D, #8B5CF6, #22D3EE)',
            transition: 'width 0.1s linear',
          }}
        />
      </div>
    </header>
  );
}
