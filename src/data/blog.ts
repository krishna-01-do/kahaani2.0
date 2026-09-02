export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: { heading: string; text: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'talking-stage',
    title: 'The Talking Stage: How to Know If It Is Going Somewhere',
    excerpt: 'You text every day, you have inside jokes, but are you actually heading toward a relationship? A practical guide to reading the signs.',
    category: 'Modern Dating',
    readTime: '8 min read',
    date: 'August 28, 2026',
    author: 'Toolorna Team',
    content: [
      {
        heading: 'What the talking stage actually is',
        text: 'The talking stage is that fuzzy in-between zone where you are clearly more than acquaintances but not yet in a relationship. You text every day, maybe you have hung out a few times, and there is a mutual flirtation that neither of you has put a label on. For Gen Z and young adults in India, this stage can last anywhere from two weeks to six months — and the uncertainty is often the most painful part. The talking stage is not a bad thing. It is a natural getting-to-know-you period. The problem is when it stretches on indefinitely with no clarity, and one person is quietly hoping for more while the other is happy with the status quo.',
      },
      {
        heading: 'The signs it is going somewhere',
        text: 'Consistency is the biggest tell. If they text you regularly — not just late at night, not just when bored, but throughout the day — that is a strong signal. They initiate conversations, not just respond. They remember small details from previous chats. They make plans to see you in person and actually follow through. They introduce you to their friends, even casually. They ask about your life beyond surface-level questions. If you are the one always reaching out first, always suggesting plans, always carrying the conversation, pay attention to that imbalance. Effort should flow both ways, even in the talking stage.',
      },
      {
        heading: 'The signs it is going nowhere',
        text: 'If their texting is erratic — hot for three days, then gone for a week — that is a pattern, not a busy schedule. If every conversation eventually turns to sexual innuendo but never to personal questions, they may be looking for entertainment, not connection. If they never make concrete plans, always saying "let us hang out sometime" without ever picking a day, that vagueness is a signal. If you have been talking for months and you still do not know their last name, where they work, or anything about their family, you are in a surface-level loop. And if they have explicitly said they are not looking for anything serious — believe them. Do not try to be the exception.',
      },
      {
        heading: 'How to bring up the conversation',
        text: 'The fear of "the talk" keeps many people stuck for months. But clarity is not needy — it is healthy. You do not need a dramatic sit-down. Try something natural: "Hey, I have really enjoyed getting to know you these past few weeks. I am at a point where I am wondering where this is heading. What are you looking for right now?" The key is to ask without an ultimatum. You are not demanding a relationship. You are asking for information so you can make your own decision. Their answer — and how they handle being asked — tells you everything.',
      },
      {
        heading: 'What to do with the answer',
        text: 'If they say they want a relationship and you do too, great — define what that means. If they say they are not sure, give it a reasonable deadline in your own head. Two more weeks of effort is fair. Two more months is not. If they say they are not looking for anything serious, respect that and decide if you are okay staying in the talking stage without expectations. If you are not — and most people are not — it is okay to walk away. Walking away from a situationship that is not serving you is not rejection. It is self-respect.',
      },
      {
        heading: 'The talking stage in the Indian context',
        text: 'In India, the talking stage has extra layers. There is the question of whether families will be involved eventually. There is the pressure of "what will people say." There is the reality that many young Indians are navigating their first real relationship without any blueprint, because their parents may have had an arranged marriage and cannot offer dating advice. This is exactly why clarity matters more here. You cannot afford to spend six months in ambiguity when the cultural stakes are higher. Ask the questions early. You deserve answers.',
      },
    ],
  },
  {
    id: 'first-fight',
    title: 'Your First Fight: Why It Is Actually a Good Thing',
    excerpt: 'Every couple fights. The first one feels terrifying, but it tells you more about your relationship than any good day ever will.',
    category: 'Relationships',
    readTime: '7 min read',
    date: 'August 28, 2026',
    author: 'Toolorna Team',
    content: [
      {
        heading: 'Why the first fight matters so much',
        text: 'The first fight in a relationship is a milestone that nobody celebrates but everyone should. Until that first disagreement, your relationship exists in a bubble — a curated version of two people on their best behaviour. The first fight is when the bubble pops, and you finally see how the other person handles conflict, stress, and disagreement. This is not a crisis. This is the first real data point about whether this relationship has long-term potential. A couple that has never fought has never been tested. A couple that has fought and recovered has a foundation.',
      },
      {
        heading: 'What a healthy first fight looks like',
        text: 'A healthy first fight stays focused on the actual issue. You are annoyed that they cancelled plans at the last minute — you talk about that, not about every time they have ever disappointed you. You use "I felt" statements rather than "you always" accusations. There is raised voice, maybe, but no name-calling, no contempt, no stonewalling. Both people get to speak. Both people feel heard. And crucially, the fight ends with some kind of resolution — not necessarily agreement, but an understanding of where the other person is coming from and a plan to do better next time.',
      },
      {
        heading: 'Red flags to watch for',
        text: 'Some behaviours in a first fight are warning signs, not just bad moments. If they give you the silent treatment for days after a minor disagreement, that is emotional punishment, not processing time. If they turn every issue into a referendum on your entire relationship ("maybe we are not compatible at all"), that is a manipulation tactic that makes you afraid to raise concerns. If they bring up things you shared in vulnerability to use as ammunition, that is a betrayal of trust. If they dismiss your feelings as "overreacting" or "being dramatic," that is gaslighting. One of these in isolation might be a mistake. A pattern of them is who they are.',
      },
      {
        heading: 'How to recover well',
        text: 'Recovery is a skill, and most people have never been taught it. The first step is a genuine apology — not "I am sorry you felt that way," but "I am sorry I did X, and I understand why it hurt you." The second step is asking what they need. Sometimes they need space, sometimes they need a hug, sometimes they need to keep talking. Ask, do not assume. The third step is a plan: "Next time I am running late, I will text you at least 30 minutes before." An apology without changed behaviour is just manipulation with better packaging.',
      },
      {
        heading: 'The repair that builds trust',
        text: 'Here is the counterintuitive truth: couples who fight and repair well end up trusting each other more than couples who never fight at all. When you have seen someone angry and they still treated you with respect, when you have disagreed and they still chose you — that is real trust. It is trust that has been tested, not trust that has never been challenged. The first fight, handled well, is the moment a relationship graduates from "we are trying this out" to "we are actually building something."',
      },
      {
        heading: 'A note on cultural pressure',
        text: 'In Indian relationships, the first fight often carries extra weight because there may be family pressure, social visibility, or the fear that any crack means the whole thing will fall apart. Resist the urge to panic. One argument does not mean you should break up, just as one good week does not mean you should get married. Take a breath, address the issue, and let the relationship deepen through honesty rather than through the avoidance of conflict.',
      },
    ],
  },
  {
    id: 'texting-etiquette',
    title: 'Texting Etiquette in 2026: What Your Messages Actually Say',
    excerpt: 'Double texts, read receipts, reply times — the way you text is a language of its own. Here is how to read it and use it well.',
    category: 'Communication',
    readTime: '9 min read',
    date: 'August 28, 2026',
    author: 'Toolorna Team',
    content: [
      {
        heading: 'Texting is a language',
        text: 'Whether we like it or not, texting has become a primary way we communicate in modern relationships. And like any language, it has grammar, tone, and subtext. A three-hour reply time means something. A "k" means something. Leaving someone on read means something. The problem is not that texting carries meaning — it is that most people are texting in different dialects without realising it, and misreading signals leads to anxiety, overthinking, and unnecessary conflict. This guide is about becoming fluent.',
      },
      {
        heading: 'Reply time: what it means and what it does not',
        text: 'A fast reply usually means they are engaged and interested — or simply that they have their phone in hand. A slow reply does not automatically mean they are not interested. People work, study, have lives, and not everyone is glued to their screen. The pattern matters more than any single instance. If they consistently reply within a few hours and the conversation is warm, you are fine. If they take 12 hours every time but post on Instagram stories in between, they are managing you, not busy. The healthiest approach: match their pace loosely, do not double-text out of anxiety, and if the pace is consistently one-sided, address it directly rather than stewing.',
      },
      {
        heading: 'The art of the double text',
        text: 'The double text has been demonised as desperate, but it is more nuanced than that. Sending a second message because you forgot to add something, or because you are excited about a topic, is normal and human. Sending five messages in a row with no response, each one increasingly anxious, is a pattern to watch. The rule of thumb: one follow-up is fine. If they do not respond to that, give them space. If the pattern is always you initiating, always you carrying — that is not a texting problem, that is an interest problem.',
      },
      {
        heading: 'Read receipts and the power game',
        text: 'Some people turn off read receipts as a boundary. Some leave them on as a statement. Neither choice is wrong, but using read receipts as a weapon — deliberately leaving someone on read to make them squirm — is a power play, not communication. If someone does this to you consistently, recognise it for what it is. Healthy partners do not weaponise attention. On the flip side, if you are the one doing it, ask yourself why. If the answer is "to keep them wanting me," you are playing a game, and games eventually exhaust the other person.',
      },
      {
        heading: 'What your texting style reveals',
        text: 'Short, one-word replies when you used to send paragraphs? That is withdrawal. Paragraphs when you used to be brief? That is investment. Emojis disappearing from your texts? Emotional temperature dropping. Voice notes appearing? They want to feel closer. The medium changes with the mood. Pay attention to shifts in texting style over time, not just any single message. A change in pattern is a signal; a single off-day is just a day.',
      },
      {
        heading: 'When to move off text',
        text: 'Texting is great for logistics, flirting, and sharing moments. It is terrible for serious conversations. If you are about to bring up a relationship concern, express hurt, or have "the talk" — do it in person or on a call. Text strips tone, and in sensitive moments, that missing tone gets filled with the worst interpretation. "We need to talk" over text will spike anxiety. "Hey, can I call you tonight? I want to talk about something" is kinder. And if someone keeps trying to have serious conversations over text, it may be because they want the distance that text provides — which itself is worth thinking about.',
      },
      {
        heading: 'The bottom line',
        text: 'Texting is a tool, not a relationship. If you find yourself analysing every message, screenshotting for your friends, and re-reading texts at 1 AM — you are in your head, not in the relationship. The best texting advice is also the simplest: if you want to know where you stand, ask. If the answer is unclear, watch what they do, not just what they type. A person who texts you consistently, makes plans, and shows up is telling you everything you need to know — no decoding required.',
      },
    ],
  },
  {
    id: 'moving-on',
    title: 'Moving On Without Losing Yourself: A Guide to Breakups',
    excerpt: 'Breakups in the age of social media are harder than ever. Here is how to grieve, heal, and come back stronger — without the performative healing.',
    category: 'Breakups',
    readTime: '10 min read',
    date: 'August 28, 2026',
    author: 'Toolorna Team',
    content: [
      {
        heading: 'The modern breakup is different',
        text: 'Breaking up used to mean a clean break. Today, your ex is in your Instagram feed, your WhatsApp contacts, your mutual friends group chats, and your phone gallery. You see their stories. You see them living their life. You see who they are with. The digital aftermath of a breakup is its own form of grief, and pretending it does not affect you is not strength — it is denial. The first step of moving on in 2026 is acknowledging that the digital space is real, and you need to manage it intentionally.',
      },
      {
        heading: 'The no-contact rule and why it works',
        text: 'No-contact is not a punishment for your ex. It is a boundary for you. It means: no texting, no calling, no checking their social media, no asking mutual friends about them, no re-reading old messages. The reason is simple: every time you check on them, you reset the healing clock. Your brain gets a small dopamine hit from seeing them, then crashes harder when the reality of the breakup returns. No-contact gives your nervous system time to regulate without the constant stimulus of the person who hurt you. For most people, 30 to 60 days of strict no-contact is the minimum needed to start thinking clearly again.',
      },
      {
        heading: 'Mute, unfollow, or block — choose your level',
        text: 'You do not have to announce a block. You do not have to make a statement. You can quietly mute their stories so they do not appear in your feed. You can unfollow so their posts do not show up. If they are actively reaching out and it is hurting you, you can block. None of these are petty. They are digital boundaries, and you are allowed to set them. The goal is not to erase them from existence — it is to reduce the number of times per day your brain is pulled back into the relationship.',
      },
      {
        heading: 'The grief is real — let it happen',
        text: 'A breakup is a loss, and loss needs to be grieved. You will have days where you feel fine and days where you cry in the shower. You will have moments of anger, moments of longing, moments of relief, and moments of guilt for feeling relieved. All of this is normal. What is not helpful is the pressure to "be over it" on a timeline. Social media will show you people who seem to have moved on in a week — they have not. They are performing. Your healing does not need an audience. Let it take the time it takes.',
      },
      {
        heading: 'What not to do',
        text: 'Do not drunk-text them at 1 AM. Do not post cryptic stories hoping they see them. Do not start a rebound relationship to prove you are fine — you will hurt yourself and the new person. Do not stalk their new partner. Do not interrogate mutual friends. Each of these actions gives your power away to someone who is no longer choosing to be in your life. The energy you spend looking backward is energy you are not spending on rebuilding.',
      },
      {
        heading: 'What actually helps',
        text: 'Routine helps. Sleep helps. Talking to one or two trusted friends helps — not twelve, because twelve opinions will confuse you. Exercise helps, even a walk. Eating properly helps. Creative outlets help — write, draw, code, cook, whatever absorbs you. Learning something new helps because it reminds your brain that you are still growing. Therapy helps, and if it is accessible to you, it is one of the best investments you can make in your recovery. Small, consistent acts of self-care are not glamorous, but they are what actually rebuild a person.',
      },
      {
        heading: 'Coming back stronger',
        text: 'The goal of moving on is not to become a cold, unfeeling person who never gets hurt again. It is to become someone who knows their worth, sets better boundaries, and chooses more carefully next time. After a breakup, you have a unique window of self-knowledge: you now know what you do not want, what you tolerated that you should not have, and what your dealbreakers actually are. Use that knowledge. Do not rush into the next thing. Let yourself become the version of you that the next relationship deserves — and that you deserve.',
      },
    ],
  },
  {
    id: 'long-distance',
    title: 'Long Distance in India: Making It Work When You Cannot Be Together',
    excerpt: 'Different cities, different time zones, family pressures — long-distance relationships in India have their own challenges. Here is how to survive and thrive.',
    category: 'Relationships',
    readTime: '8 min read',
    date: 'August 28, 2026',
    author: 'Toolorna Team',
    content: [
      {
        heading: 'The Indian long-distance reality',
        text: 'Long-distance relationships in India are often not a choice — they are a consequence of education, jobs, and family decisions. One person gets a job in Bangalore, the other is finishing college in Delhi. One person moves for a master\'s degree, the other stays back for family reasons. The distance is real, the train tickets are expensive, and the video calls are the relationship. But LDRs can and do work, when both people are committed to making them work. The couples who succeed are not the ones with the most romantic gestures — they are the ones with the best systems.',
      },
      {
        heading: 'Communication: quality over quantity',
        text: 'The biggest mistake in LDRs is trying to replicate a same-city relationship over text. You cannot be in constant contact all day and expect it to stay meaningful. Instead, focus on quality. Have one good conversation a day — a proper video call or a phone call where you are actually present, not multitasking. Send each other voice notes throughout the day — they carry tone and warmth that text cannot. Share the mundane: what you ate, what your colleague said, the auto driver who overcharged you. The mundane is what makes you feel like you are still part of each other\'s daily life.',
      },
      {
        heading: 'The visit plan',
        text: 'LDRs need a next-visit date on the calendar at all times. Not "sometime next month" — an actual date, with tickets booked. The anticipation of seeing each other is what carries you through the weeks in between. Take turns traveling so the burden is shared. Plan what you will do together — even if it is just eating at your favourite place and watching a movie. The visit does not need to be grand. It needs to happen. And when it does, be fully present. Put the phone down. You have travelled to be with a person, not their Instagram.',
      },
      {
        heading: 'Trust and the jealousy trap',
        text: 'Distance breeds imagination, and imagination breeds jealousy. When you cannot see what your partner is doing, your brain fills in the gaps — usually with the worst-case scenario. They went out with colleagues? They are probably flirting. They did not text for four hours? They are losing interest. This spiral is normal, but it is destructive. The antidote is transparency, not surveillance. Share your plans voluntarily. Introduce your partner to your friend group over a video call. If you feel jealous, say it as a feeling, not an accusation: "I felt insecure when I saw that photo" is honest. "Why were you with them?" is an interrogation.',
      },
      {
        heading: 'The family factor',
        text: 'In India, long-distance relationships often face the family question earlier than same-city ones. If your families do not know about the relationship, the distance makes it easier to hide and harder to sustain. If they do know, the distance can become ammunition: "How will this work? They are so far away." Have a plan for this conversation. Show your families that you are serious, that you visit each other, that you have a timeline for eventually being in the same city. Vague answers like "we will figure it out" will not reassure traditional parents. Concrete plans — "I am looking for a transfer in six months" or "I will move after my contract ends" — will.',
      },
      {
        heading: 'The end date',
        text: 'No LDR should be open-ended. The couples who survive are the ones who have a plan for eventually being in the same place. It does not need to be next month, but it needs to exist. "After graduation," "after this project," "in a year" — whatever the timeline is, both people need to agree on it and work toward it. If one person has no intention of ever closing the distance, and the other is holding on hoping they will change their mind, that is not a long-distance relationship. That is a waiting game that one person does not know they are playing. Have the hard conversation. Know the plan. And if there is no plan, ask yourself if this is sustainable — because love without a shared future is just a beautiful delay.',
      },
    ],
  },
];
