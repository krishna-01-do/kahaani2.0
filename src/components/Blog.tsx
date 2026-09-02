import { motion } from 'framer-motion';
import { ArrowRight, Clock, PenLine } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import type { BlogPost } from '@/data/blog';
import { RectangleAd300x250 } from './Ads';

const ease = [0.22, 1, 0.36, 1] as const;

interface BlogProps {
  postId: string | null;
  onSelectPost: (id: string | null) => void;
}

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

function PostCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <Reveal>
      <button
        onClick={onClick}
        className="group glass glass-hover w-full text-left rounded-2xl p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1.5 flex flex-col"
      >
        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(255,61,119,0.10)', border: '1px solid rgba(255,61,119,0.25)', color: 'var(--color-romance)' }}
          >
            {post.category}
          </span>
          <span className="font-mono text-[11px] text-faint flex items-center gap-1">
            <Clock className="w-3 h-3" strokeWidth={1.75} />
            {post.readTime}
          </span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-600 text-heading mb-3 leading-tight group-hover:opacity-90 transition-opacity">
          {post.title}
        </h3>
        <p className="font-body text-sm text-body leading-relaxed flex-1 mb-5">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-faint flex items-center gap-1.5">
            <PenLine className="w-3 h-3" strokeWidth={1.75} />
            {post.date}
          </span>
          <span className="font-mono text-xs flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color: 'var(--color-romance-2)' }}>
            Read <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
          </span>
        </div>
      </button>
    </Reveal>
  );
}

export function Blog({ postId, onSelectPost }: BlogProps) {
  const activePost = postId ? blogPosts.find((p) => p.id === postId) : undefined;

  if (activePost) {
    return (
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-20">
        <motion.button
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease }}
          onClick={() => onSelectPost(null)}
          className="flex items-center gap-1.5 font-mono text-sm text-body hover:text-heading transition-colors mb-8"
        >
          <ArrowRight className="w-4 h-4 rotate-180" strokeWidth={1.75} />
          All articles
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(255,61,119,0.10)', border: '1px solid rgba(255,61,119,0.25)', color: 'var(--color-romance)' }}
            >
              {activePost.category}
            </span>
            <span className="font-mono text-[11px] text-faint flex items-center gap-1">
              <Clock className="w-3 h-3" strokeWidth={1.75} />
              {activePost.readTime}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-700 text-heading mb-4 leading-tight">
            {activePost.title}
          </h1>
          <div className="flex items-center gap-3 font-mono text-xs text-faint">
            <span className="flex items-center gap-1.5">
              <PenLine className="w-3.5 h-3.5" strokeWidth={1.75} />
              {activePost.author}
            </span>
            <span>·</span>
            <span>{activePost.date}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="space-y-8"
        >
          {activePost.content.map((section, i) => (
            <section key={i}>
              <h2 className="font-display text-lg sm:text-xl font-700 text-heading mb-3">{section.heading}</h2>
              <p className="font-body text-[16px] text-body leading-[1.8]">{section.text}</p>
            </section>
          ))}
        </motion.div>

        {/* Rectangle ad after article content */}
        <div className="mt-8 flex justify-center">
          <RectangleAd300x250 />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint mb-5">Keep reading</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {blogPosts.filter((p) => p.id !== activePost.id).slice(0, 2).map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  onSelectPost(p.id);
                  window.scrollTo({ top: 0 });
                }}
                className="glass glass-hover rounded-2xl p-5 text-left transition-all duration-200 hover:-translate-y-1"
              >
                <span className="font-mono text-[10px] tracking-wider uppercase text-faint mb-2 block">{p.category}</span>
                <h3 className="font-display text-base font-600 text-heading mb-2 leading-tight">{p.title}</h3>
                <span className="font-mono text-xs flex items-center gap-1.5" style={{ color: 'var(--color-romance-2)' }}>
                  Read <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
      <div className="flex items-center gap-2 mb-3">
        <PenLine className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint">Blog</p>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="font-display text-3xl sm:text-5xl font-700 text-heading mb-3"
      >
        Real talk on modern love
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.05 }}
        className="font-body text-lg text-body max-w-2xl mb-10"
      >
        Honest, in-depth articles on the stuff nobody teaches you — texting, fights, breakups,
        long distance, and everything in between. Written for how relationships actually work today.
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.map((post, i) => (
          <PostCard key={post.id} post={post} onClick={() => { onSelectPost(post.id); window.scrollTo({ top: 0 }); }} />
        ))}
      </div>

      {/* Rectangle ad after blog list */}
      <div className="mt-10 flex justify-center">
        <RectangleAd300x250 />
      </div>
    </div>
  );
}
