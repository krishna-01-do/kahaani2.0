import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Crown, Loader2, Check, AlertCircle, Mail, Download, BookOpen, Zap, Gift, Heart, Sparkles, Clock, ShieldCheck, ChevronLeft, Phone } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const PRODUCT = {
  id: 'how-to-make-fall-7-days',
  title: 'How to Make Any Girl or Boy Fall for You in 7 Days',
  subtitle: 'The Ultimate Indian Psychology Guide to Win Their Heart',
  price: 149,
  thumbnails: [
    '/products/relationships/thumbnails/ChatGPT_Image_Aug_25,_2026,_12_17_55_PM.png',
    '/products/relationships/thumbnails/ChatGPT_Image_Aug_25,_2026,_12_19_27_PM.png',
    '/products/relationships/thumbnails/ChatGPT_Image_Aug_25,_2026,_12_20_15_PM.png',
  ],
  description: [
    'You gave everything. And they still left you on read.',
    'It is 2AM. You are staring at your phone again. Replaying every conversation. Every moment. Every "maybe they will text back."',
    'They will not. And the worst part? You do not even know what went wrong.',
  ],
  painPoints: [
    'You like someone deeply but they barely know you exist',
    'You got ghosted with zero explanation and it still hurts',
    'You confessed your feelings and got rejected — and replay it daily',
    'You always end up as the "just a friend" no matter what you do',
    'A breakup left a hole in your chest that will not heal',
    'Love seems effortless for everyone around you — except you',
    'You feel things deeply but have no idea how to express them',
  ],
  promise: 'You are not broken. You are not unlucky. You just never had the right guide.',
  indianContext: 'Built specifically for Indians. Not copy-pasted Western advice.',
  indianPoints: [
    'Family pressure around relationships',
    'Fear of social judgment in college or office',
    'The pain of one-sided love you cannot even speak out loud',
    'The unique emotional complexity of Indian relationships',
  ],
  dayPlan: [
    { day: 1, title: 'Build magnetic confidence that makes people notice you before you speak' },
    { day: 2, title: 'Master the art of mystery so they cannot stop thinking about you' },
    { day: 3, title: 'Know exactly what to say, how to say it, and the perfect moment' },
    { day: 4, title: 'Create a deep emotional connection that feels completely natural' },
    { day: 5, title: 'Build trust so strong they feel safe opening their heart to you' },
    { day: 6, title: 'Use eye contact, touch and body language to create chemistry' },
    { day: 7, title: 'Seal it — turn that attraction into something real and committed' },
  ],
  bonuses: [
    '5 exact texts to send RIGHT NOW to make them miss you',
    'The biggest mistakes Indian boys and girls make that silently destroy any chance of love',
    'Social media hacks to make them notice you and think about you constantly',
  ],
  outcomes: [
    'Approach the person you like without fear or overthinking',
    'Know exactly what to text — no more staring at a blank screen',
    'Make them notice you, think about you, and want to be around you',
    'Completely flip a rejection or ghost situation in your favour',
    'Turn one-sided feelings into a real, mutual connection',
    'Walk into any room with confidence that people can feel',
  ],
  fileSize: '4MB PDF',
};

interface ShopProps {
  onBack: () => void;
}

export function Shop({ onBack }: ShopProps) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderStatus, setOrderStatus] = useState<'idle' | 'success' | 'sending' | 'sent' | 'failed'>('idle');
  const [deliveryEmail, setDeliveryEmail] = useState('');

  // Check for payment redirect on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('payment');
    const accessKey = params.get('access_key');

    if (status === 'success' && accessKey) {
      window.history.replaceState({}, '', '/shop');
      setOrderStatus('sending');
      triggerDelivery(accessKey);
    } else if (status === 'failed') {
      window.history.replaceState({}, '', '/shop');
      setError('Payment failed. Please try again.');
      setOrderStatus('failed');
    }
  }, []);

  const triggerDelivery = useCallback(async (accessKey: string) => {
    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/product-deliver`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ access_key: accessKey }),
      });
      const data = await response.json();
      if (response.ok && data.sent) {
        setDeliveryEmail(data.email || '');
        setOrderStatus('sent');
      } else {
        setError(data.error || 'Could not send email. Please contact support.');
        setOrderStatus('failed');
      }
    } catch {
      setError('Could not send email. Please contact support.');
      setOrderStatus('failed');
    }
  }, []);

  const initiatePayment = async () => {
    setError(null);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address — the PDF will be sent there.');
      return;
    }

    if (!phone || !/^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''))) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setLoading(true);
    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/product-payu-initiate`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ product_id: PRODUCT.id, email, firstname: name || undefined, phone: phone || undefined }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Payment service unavailable');
      }

      const data = await response.json();
      if (!data.hash || !data.merchantKey) throw new Error('Invalid response from payment service');

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = data.payuBaseUrl;

      const fields: Record<string, string> = {
        key: data.merchantKey,
        txnid: data.txnid,
        amount: data.amount,
        productinfo: data.productinfo,
        firstname: data.firstname,
        email: data.email,
        phone: data.phone || '',
        surl: data.surl,
        furl: data.furl,
        hash: data.hash,
      };

      for (const [key, value] of Object.entries(fields)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }

      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not start payment. Please try again.');
      setLoading(false);
    }
  };

  // Success screen
  if (orderStatus === 'sent') {
    return (
      <div className="mx-auto max-w-2xl px-5 sm:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
          className="glass rounded-3xl p-8 sm:p-12 text-center"
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(198,255,61,0.12)' }}>
            <Check className="w-8 h-8" strokeWidth={2} style={{ color: 'var(--color-lime)' }} />
          </div>
          <h1 className="font-display text-3xl font-700 text-heading mb-3">Check your email!</h1>
          <p className="font-body text-lg text-body mb-2">
            Your PDF guide has been sent to
          </p>
          <p className="font-mono text-sm font-600 mb-6" style={{ color: 'var(--color-romance-2)' }}>
            {deliveryEmail}
          </p>
          <div className="rounded-xl p-4 mb-6" style={{ background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.15)' }}>
            <p className="font-body text-sm text-body leading-relaxed">
              Check your inbox (and spam folder just in case). The email contains your PDF as an attachment. Download it and start with Day 1 today.
            </p>
          </div>
          <button
            onClick={onBack}
            className="font-mono text-sm text-body hover:text-heading transition-colors"
          >
            Back to Toolorna
          </button>
        </motion.div>
      </div>
    );
  }

  // Sending email screen
  if (orderStatus === 'sending') {
    return (
      <div className="mx-auto max-w-2xl px-5 sm:px-8 py-12 sm:py-20">
        <div className="glass rounded-3xl p-8 sm:p-12 text-center">
          <Loader2 className="w-10 h-10 animate-spin mx-auto mb-6" strokeWidth={1.5} style={{ color: 'var(--color-romance)' }} />
          <h1 className="font-display text-2xl font-700 text-heading mb-2">Payment successful!</h1>
          <p className="font-body text-lg text-body">Sending your PDF to your email now...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Back button */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 font-mono text-sm text-body hover:text-heading transition-colors"
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={1.75} />
          Back to Toolorna
        </button>
      </div>

      {/* Hero / product header */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Carousel */}
          <div>
            <div className="glass rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeThumb}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/5] flex items-center justify-center"
                >
                  <img
                    src={PRODUCT.thumbnails[activeThumb]}
                    alt={`Preview ${activeThumb + 1}`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex gap-2 mt-3">
              {PRODUCT.thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className="flex-1 rounded-xl overflow-hidden transition-all duration-200"
                  style={{
                    border: activeThumb === i ? '2px solid var(--color-romance)' : '2px solid transparent',
                    opacity: activeThumb === i ? 1 : 0.5,
                  }}
                >
                  <img src={thumb} alt={`Thumbnail ${i + 1}`} className="w-full aspect-[4/5] object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Buy box */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint">Digital PDF Guide</p>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-700 text-heading mb-2 leading-tight">
              {PRODUCT.title}
            </h1>
            <p className="font-body text-lg text-body mb-6">{PRODUCT.subtitle}</p>

            {/* Price + buy box */}
            <div className="glass rounded-3xl p-6 sm:p-8 mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-4xl font-700 text-heading">₹{PRODUCT.price}</span>
                <span className="font-mono text-sm text-faint">one-time</span>
              </div>
              <p className="font-body text-sm text-faint mb-6">Instant digital download. Pay once, read forever.</p>

              {/* Email input */}
              <div className="mb-4">
                <label className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-faint mb-2">
                  <Mail className="w-3.5 h-3.5" strokeWidth={1.75} />
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl px-4 py-3 font-body text-[15px] text-heading bg-white/5 border border-white/10 focus:border-[var(--color-romance)] outline-none transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                />
                <p className="font-mono text-[11px] text-faint mt-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3 h-3" strokeWidth={1.75} />
                  Enter your correct email — the PDF file will be sent there after payment.
                </p>
              </div>

              {/* Name input (optional) */}
              <div className="mb-4">
                <label className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-faint mb-2">
                  Your name <span className="text-faint normal-case">(optional)</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your first name"
                  className="w-full rounded-xl px-4 py-3 font-body text-[15px] text-heading bg-white/5 border border-white/10 focus:border-[var(--color-romance)] outline-none transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                />
              </div>

              {/* Phone input (required by PayU) */}
              <div className="mb-6">
                <label className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-faint mb-2">
                  <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />
                  Phone number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full rounded-xl px-4 py-3 font-body text-[15px] text-heading bg-white/5 border border-white/10 focus:border-[var(--color-romance)] outline-none transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                />
                <p className="font-mono text-[11px] text-faint mt-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3 h-3" strokeWidth={1.75} />
                  Required by the payment gateway for transaction verification.
                </p>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4"
                  >
                    <div className="flex items-start gap-2 text-sm rounded-xl px-4 py-3" style={{ background: 'rgba(255,61,119,0.08)', border: '1px solid rgba(255,61,119,0.25)', color: 'var(--color-romance)' }}>
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={1.75} />
                      <p className="font-body leading-relaxed">{error}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={initiatePayment}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-mono text-sm font-700 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, #FF3D77, #FF8A3D)',
                  boxShadow: '0 0 32px -6px rgba(255,61,119,0.5)',
                }}
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 text-white animate-spin" strokeWidth={2} />
                ) : (
                  <Crown className="w-5 h-5 text-white" strokeWidth={2} />
                )}
                {loading ? 'Redirecting to PayU...' : `Pay ₹${PRODUCT.price} & Get PDF`}
              </motion.button>

              <div className="flex items-center justify-center gap-4 mt-4 text-faint">
                <span className="font-mono text-[11px] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" strokeWidth={1.75} /> Secure payment
                </span>
                <span className="font-mono text-[11px] flex items-center gap-1">
                  <Clock className="w-3 h-3" strokeWidth={1.75} /> Instant delivery
                </span>
              </div>
            </div>

            {/* Quick highlights */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Zap, label: '7-day action plan' },
                { icon: Gift, label: '3 free bonuses inside' },
                { icon: Download, label: PRODUCT.fileSize },
                { icon: Heart, label: 'Made for Indians' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-3 flex items-center gap-2">
                  <item.icon className="w-4 h-4 shrink-0" strokeWidth={1.75} style={{ color: 'var(--color-romance-2)' }} />
                  <p className="font-body text-sm text-body">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Long-form description */}
      <div className="mx-auto max-w-2xl px-5 sm:px-8 py-8 sm:py-12">
        {/* Pain points */}
        <div className="mb-12">
          {PRODUCT.description.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="font-body text-lg text-body leading-[1.75] mb-4"
            >
              {line}
            </motion.p>
          ))}

          <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint mb-4 mt-8">Does any of this sound like you?</p>
          <div className="space-y-3">
            {PRODUCT.painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="text-base shrink-0 mt-0.5" style={{ color: 'var(--color-romance)' }}>&#128156;</span>
                <p className="font-body text-[15px] text-body leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Promise */}
        <div className="rounded-2xl p-6 mb-12 text-center" style={{ background: 'rgba(255,61,119,0.06)', border: '1px solid rgba(255,61,119,0.2)' }}>
          <p className="font-display text-xl sm:text-2xl font-700 text-heading leading-relaxed">
            {PRODUCT.promise}
          </p>
        </div>

        {/* Indian context */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">&#127470;&#127475;</span>
            <h2 className="font-display text-xl font-700 text-heading">{PRODUCT.indianContext}</h2>
          </div>
          <p className="font-body text-base text-body mb-4">
            Forget "just be yourself" and "shoot your shot." That advice was written for someone who has never felt:
          </p>
          <div className="space-y-2">
            {PRODUCT.indianPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-sm shrink-0 mt-1" style={{ color: 'var(--color-romance)' }}>&#10060;</span>
                <p className="font-body text-[15px] text-body leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-base text-body mt-4">This guide gets it. Because it was made for YOU.</p>
        </div>

        {/* 7-day plan */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5" strokeWidth={1.75} style={{ color: 'var(--color-romance-2)' }} />
            <h2 className="font-display text-xl font-700 text-heading">What changes in just 7 days</h2>
          </div>
          <div className="space-y-3">
            {PRODUCT.dayPlan.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease, delay: i * 0.06 }}
                className="glass rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-mono text-sm font-700" style={{ background: 'linear-gradient(135deg, #FF3D77, #FF8A3D)', color: '#fff' }}>
                  {day.day}
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-wider uppercase text-faint mb-1">Day {day.day}</p>
                  <p className="font-body text-[15px] text-body leading-relaxed">{day.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bonuses */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Gift className="w-5 h-5" strokeWidth={1.75} style={{ color: 'var(--color-lime)' }} />
            <h2 className="font-display text-xl font-700 text-heading">Plus 3 free bonuses inside</h2>
          </div>
          <div className="space-y-3">
            {PRODUCT.bonuses.map((bonus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease, delay: i * 0.06 }}
                className="rounded-2xl p-5 flex items-start gap-3"
                style={{ background: 'rgba(198,255,61,0.06)', border: '1px solid rgba(198,255,61,0.2)' }}
              >
                <span className="text-base shrink-0">&#128293;</span>
                <p className="font-body text-[15px] text-body leading-relaxed">{bonus}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-12">
          <h2 className="font-display text-xl font-700 text-heading mb-6">Here is what you will finally be able to do</h2>
          <div className="space-y-3">
            {PRODUCT.outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255,61,119,0.2), rgba(255,138,61,0.2))' }}>
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: 'var(--color-romance)' }} />
                </div>
                <p className="font-body text-[15px] text-body leading-relaxed">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="rounded-2xl p-6 mb-12 text-center" style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.2)' }}>
          <Sparkles className="w-5 h-5 mx-auto mb-3" strokeWidth={1.75} style={{ color: 'var(--color-calm)' }} />
          <p className="font-display text-lg sm:text-xl font-600 text-heading leading-relaxed italic">
            "You deserve to be chosen. You deserve to be loved back. This guide will show you exactly how to make that happen."
          </p>
        </div>

        {/* Instant download banner */}
        <div className="glass rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-5 h-5" strokeWidth={1.75} style={{ color: 'var(--color-calm-2)' }} />
            <h3 className="font-display text-lg font-700 text-heading">Instant digital download</h3>
          </div>
          <p className="font-body text-sm text-body leading-relaxed mb-2">
            The moment payment is complete — the guide is yours. No waiting. No shipping. Start reading in 30 seconds.
          </p>
          <p className="font-body text-sm text-faint">Available 24/7. Read on your phone, laptop, anywhere.</p>
        </div>

        {/* Final CTA */}
        <div className="rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(255,61,119,0.08), rgba(255,138,61,0.08))', border: '1px solid rgba(255,61,119,0.2)' }}>
          <p className="font-display text-xl font-700 text-heading mb-3">
            This price will not stay this low for long.
          </p>
          <p className="font-body text-base text-body mb-6 leading-relaxed">
            Right now, the person you have been thinking about is waiting — for you to finally show up as the most confident, magnetic version of yourself.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono text-sm font-700"
            style={{
              background: 'linear-gradient(135deg, #FF3D77, #FF8A3D)',
              boxShadow: '0 0 32px -6px rgba(255,61,119,0.5)',
            }}
          >
            <Crown className="w-5 h-5 text-white" strokeWidth={2} />
            Buy Now — Your Love Life Changes Today
          </motion.button>
          <p className="font-mono text-[11px] text-faint mt-4">You will get a {PRODUCT.fileSize} file</p>
        </div>
      </div>
    </div>
  );
}
