import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import type { Tab } from './components/Nav';
import { Home } from './components/Home';
import { Guide } from './components/Guide';
import { Scenarios } from './components/Scenarios';
import { Ask } from './components/Ask';
import { Shop } from './components/Shop';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';
import { Blog } from './components/Blog';
import { NativeBannerAd, MobileAd320x50 } from './components/Ads';
import { useSEO } from './components/useSEO';
import { blogPosts } from './data/blog';
import { ThemeProvider } from './components/ThemeProvider';

function parseScenarioPath(): { scenarioId: string | null; chapterNum: number | null } {
  const path = window.location.pathname;
  if (path === '/scenarios' || path === '/scenarios/') {
    return { scenarioId: null, chapterNum: null };
  }
  const match = path.match(/^\/scenarios\/([^/]+)(?:\/(\d+))?$/);
  if (match) {
    return { scenarioId: match[1], chapterNum: match[2] ? parseInt(match[2], 10) : null };
  }
  return { scenarioId: null, chapterNum: null };
}

function getInitialTab(): Tab {
  const path = window.location.pathname;
  if (path === '/scenarios' || path.startsWith('/scenarios/')) return 'scenarios';
  if (path === '/shop' || path.startsWith('/shop')) return 'shop';
  if (path === '/blog' || path.startsWith('/blog/')) return 'blog';
  if (path === '/about') return 'about';
  if (path === '/contact') return 'contact';
  if (path === '/privacy') return 'privacy';
  if (path === '/terms') return 'terms';
  return 'home';
}

function App() {
  const [tab, setTab] = useState<Tab>(getInitialTab);
  const [guideTopicId, setGuideTopicId] = useState<string | null>(null);
  const [blogPostId, setBlogPostId] = useState<string | null>(null);
  const initialScenario = parseScenarioPath();
  const [scenarioId, setScenarioId] = useState<string | null>(initialScenario.scenarioId);
  const [chapterNum, setChapterNum] = useState<number | null>(initialScenario.chapterNum ?? (initialScenario.scenarioId ? 1 : null));

  // Dynamic SEO per page
  const seoData = (() => {
    const base = 'https://toolorna.vercel.app';
    switch (tab) {
      case 'home':
        return { title: 'Toolorna — Relationship Advice for Indian Gen Z & Young Adults', description: 'Honest relationship advice for Indians — texting, the talking stage, first fights, breakups, one-sided love, long distance, and more. Read real scenarios and in-depth blog articles.', canonical: `${base}/` };
      case 'guide':
        return { title: 'Relationship Guide — Topics on Love, Dating & Breakups | Toolorna', description: 'Plain-language articles on the parts of relationships that matter — shyness, making the first move, the talking stage, relationships, breakups, and heartbreak. Written for an Indian context.', canonical: `${base}/` };
      case 'scenarios':
        return { title: 'Relationship Scenarios — Real Stories from Start to Commitment | Toolorna', description: 'Each scenario follows two people through nine chapters — from the first notice to meeting family. You see both sides think, not just one.', canonical: `${base}/scenarios` };
      case 'blog': {
        const post = blogPostId ? blogPosts.find((p) => p.id === blogPostId) : undefined;
        if (post) {
          return { title: `${post.title} | Toolorna`, description: post.excerpt, canonical: `${base}/blog/${post.id}` };
        }
        return { title: 'Blog — Modern Relationship Advice for Indians | Toolorna', description: 'Honest, in-depth articles on texting, the talking stage, fights, breakups, one-sided love, long distance, green flags, and more. Written for how relationships actually work today.', canonical: `${base}/blog` };
      }
      case 'ask':
        return { title: 'Ask Toolorna — Get Honest Answers to Your Relationship Questions', description: 'Ask your relationship doubts and get honest, grounded advice — about attraction, the talking stage, relationships, breakups, and heartbreak. No manipulation, no scripts.', canonical: `${base}/` };
      case 'shop':
        return { title: 'Shop — Relationship Guides & PDF Downloads | Toolorna', description: 'Get the ultimate Indian psychology guide to relationships. PDF guides that go deeper on attraction, connection, and love.', canonical: `${base}/shop` };
      case 'about':
        return { title: 'About Toolorna — Our Mission & Approach to Relationship Advice', description: 'Toolorna is an honest guide to relationships in an Indian context — grounded in consent, honesty, and real human experience, not pickup tactics or manipulation.', canonical: `${base}/about` };
      case 'contact':
        return { title: 'Contact Toolorna — Get in Touch', description: 'Have a question, feedback, or a story to share? Reach out to the Toolorna team.', canonical: `${base}/contact` };
      case 'privacy':
        return { title: 'Privacy Policy | Toolorna', description: 'Read the Toolorna privacy policy to understand how we handle your data and information.', canonical: `${base}/privacy` };
      case 'terms':
        return { title: 'Terms & Disclaimer | Toolorna', description: 'Toolorna provides guidance, not professional advice. Read our full terms and disclaimer.', canonical: `${base}/terms` };
      default:
        return { title: 'Toolorna — Relationship Advice for Indian Gen Z & Young Adults', description: 'Honest relationship advice for Indians.', canonical: `${base}/` };
    }
  })();
  useSEO(seoData);

  const navigate = (next: Tab, opts?: { scenarioId?: string; topicId?: string; postId?: string }) => {
    setTab(next);
    if (next === 'scenarios') {
      const sid = opts?.scenarioId ?? null;
      setScenarioId(sid);
      if (sid) {
        setChapterNum(1);
        window.history.pushState({}, '', `/scenarios/${sid}`);
      } else {
        setChapterNum(null);
        window.history.pushState({}, '', '/scenarios');
      }
    } else if (next === 'shop') {
      window.history.pushState({}, '', '/shop');
    } else if (next === 'blog') {
      const pid = opts?.postId ?? null;
      setBlogPostId(pid);
      if (pid) {
        window.history.pushState({}, '', `/blog/${pid}`);
      } else {
        window.history.pushState({}, '', '/blog');
      }
    } else if (next === 'about') {
      window.history.pushState({}, '', '/about');
    } else if (next === 'contact') {
      window.history.pushState({}, '', '/contact');
    } else if (next === 'privacy') {
      window.history.pushState({}, '', '/privacy');
    } else if (next === 'terms') {
      window.history.pushState({}, '', '/terms');
    } else if (next === 'home') {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
    }
    if (next === 'guide') {
      setGuideTopicId(opts?.topicId ?? null);
    }
    if (next === 'blog') {
      setBlogPostId(opts?.postId ?? null);
    }
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname;
      if (path === '/scenarios' || path.startsWith('/scenarios/')) {
        setTab('scenarios');
        const parsed = parseScenarioPath();
        setScenarioId(parsed.scenarioId);
        setChapterNum(parsed.chapterNum ?? (parsed.scenarioId ? 1 : null));
      } else if (path === '/shop' || path.startsWith('/shop')) {
        setTab('shop');
      } else if (path === '/blog' || path.startsWith('/blog/')) {
        setTab('blog');
        const m = path.match(/^\/blog\/([^/]+)$/);
        setBlogPostId(m ? m[1] : null);
      } else if (path === '/about') {
        setTab('about');
      } else if (path === '/contact') {
        setTab('contact');
      } else if (path === '/privacy') {
        setTab('privacy');
      } else if (path === '/terms') {
        setTab('terms');
      } else if (path === '/') {
        setTab('home');
        setScenarioId(null);
        setChapterNum(null);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleSelectScenario = (id: string | null) => {
    setScenarioId(id);
    if (!id) {
      setChapterNum(null);
      window.history.pushState({}, '', '/scenarios');
    } else {
      setChapterNum(1);
      window.history.pushState({}, '', `/scenarios/${id}`);
    }
    window.scrollTo({ top: 0 });
  };

  const handleSelectChapter = (n: number) => {
    setChapterNum(n);
    if (scenarioId) {
      window.history.pushState({}, '', `/scenarios/${scenarioId}/${n}`);
    }
  };

  return (
    <ThemeProvider>
      <div className="grain min-h-screen flex flex-col">
        <Nav active={tab} onNavigate={(t) => navigate(t)} />

        <main className="flex-1">
          {tab === 'home' && <Home onNavigate={navigate} />}
          {tab === 'guide' && (
            <Guide topicId={guideTopicId} onSelectTopic={(id) => {
              setGuideTopicId(id);
              window.scrollTo({ top: 0 });
            }} />
          )}
          {tab === 'scenarios' && (
            <Scenarios
              scenarioId={scenarioId}
              chapterNum={chapterNum}
              onSelectScenario={handleSelectScenario}
              onSelectChapter={handleSelectChapter}
            />
          )}
          {tab === 'shop' && <Shop onBack={() => navigate('home')} />}
          {tab === 'ask' && <Ask />}
          {tab === 'blog' && (
            <Blog
              postId={blogPostId}
              onSelectPost={(id) => {
                setBlogPostId(id);
                if (id) {
                  window.history.pushState({}, '', `/blog/${id}`);
                } else {
                  window.history.pushState({}, '', '/blog');
                }
                window.scrollTo({ top: 0 });
              }}
            />
          )}
          {tab === 'about' && <About />}
          {tab === 'contact' && <Contact />}
          {tab === 'privacy' && <Privacy />}
          {tab === 'terms' && <Terms />}
        </main>

        {/* Mobile bottom banner ad */}
        <div className="flex sm:hidden justify-center py-2" style={{ borderTop: '1px solid var(--color-glass-border)' }}>
          <MobileAd320x50 />
        </div>

        <footer className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <p className="font-display text-xl font-700"><span className="gradient-romance">Toolorna</span></p>
                <p className="font-body text-sm text-faint mt-1">
                  Every Love Story. Every Message. Every Moment.
                </p>
              </div>
              <p className="font-mono text-[11px] text-faint text-center sm:text-right max-w-xs leading-relaxed">
                Guidance, not professional advice. Grounded in consent and honesty — never
                manipulation. If you're in distress, please reach out to someone you trust.
              </p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/5 pt-6">
              {([
                ['About', 'about'],
                ['Contact', 'contact'],
                ['Privacy Policy', 'privacy'],
                ['Terms & Disclaimer', 'terms'],
              ] as [string, Tab][]).map(([label, t]) => (
                <button
                  key={t}
                  onClick={() => navigate(t)}
                  className="font-mono text-xs text-faint hover:text-heading transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Native banner ad in footer */}
            <div className="mt-6 flex justify-center">
              <NativeBannerAd />
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
