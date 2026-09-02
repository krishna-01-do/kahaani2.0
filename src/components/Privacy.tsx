import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const LAST_UPDATED = 'August 28, 2026';

const sections = [
  {
    title: 'Information we collect',
    body: [
      'We collect minimal information to operate Toolorna. When you use the Ask Toolorna assistant, the text of your conversation is sent to our AI provider (Google) to generate a response. When you submit feedback or contact us, we receive whatever name and message you provide.',
      'We do not ask for your real name, phone number, or any identity document. Any name you provide is optional and chosen by you.',
    ],
  },
  {
    title: 'Third-party vendors and Google ads',
    body: [
      'We use third-party vendors, including Google, to serve ads on this website. Google, as a third-party vendor, uses cookies to serve ads on this site based on your prior visits to our website and other sites on the internet.',
      'Google\'s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the internet.',
      'You may opt out of personalised advertising by visiting Google Ads Settings at https://www.google.com/settings/ads. You can also opt out of third-party vendors\' use of cookies for personalised advertising by visiting www.aboutads.info.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'Cookies are small text files stored on your device. We use cookies for essential site functionality (such as remembering your theme preference) and, where applicable, to serve advertising through third-party vendors like Google.',
      'You can control and delete cookies through your browser settings. Disabling cookies may affect some features of the site.',
    ],
  },
  {
    title: 'AI conversations',
    body: [
      'When you use Ask Toolorna, your messages are sent to Google\'s Gemini API to generate replies. We do not store your conversation history on our servers. Please do not share personally sensitive information (addresses, phone numbers, passwords) in the chat.',
    ],
  },
  {
    title: 'Payments',
    body: [
      'If you make a purchase through the Shop, payment is processed by our payment provider (PayU). We do not store your card details, CVV, or net-banking credentials on our servers. Transaction details are handled by the payment provider under their own privacy policy.',
    ],
  },
  {
    title: 'Children',
    body: [
      'Toolorna is not directed at children under 18. We do not knowingly collect personal information from anyone under 18. If you believe a minor has provided us information, please contact us and we will delete it.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You can use Toolorna without providing any personal information. You can clear stored preferences (like theme) by clearing your browser\'s cookies. You can opt out of personalised ads through the links above.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this privacy policy from time to time. The date at the top of this page reflects the last update. Continued use of the site after changes means you accept the updated policy.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'Questions about privacy? Email us at allearnhelp@gmail.com and we will get back to you.',
    ],
  },
];

export function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mb-10"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Shield className="w-4 h-4" strokeWidth={1.75} style={{ color: 'var(--color-romance)' }} />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-faint">Privacy</p>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-700 text-heading mb-3">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-faint">Last updated: {LAST_UPDATED}</p>
      </motion.div>

      <div className="space-y-8">
        {sections.map((s, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, ease }}
          >
            <h2 className="font-display text-lg sm:text-xl font-700 text-heading mb-3">{s.title}</h2>
            <div className="space-y-3">
              {s.body.map((p, j) => (
                <p key={j} className="font-body text-[15px] text-body leading-[1.75]">{p}</p>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
