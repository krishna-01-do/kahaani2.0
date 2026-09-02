import type { Scenario } from '../types';

export const officeScenario: Scenario = {
  id: 'office',
  setting: 'The Office',
  city: 'Bengaluru',
  blurb: 'A software engineer and a new UX designer on the same team, from first glance to meeting the parents.',
  hisName: 'Rohan',
  herName: 'Priya',
  hisRole: 'Software engineer',
  herRole: 'UX designer, joins his team',
  chapters: [
    {
      num: 1,
      title: 'Notice',
      timeframe: 'Week 1',
      story:
        'Rohan is in the Bengaluru office of a mid-size fintech. It\'s a typical Monday — standup at 10, then back to debugging a payment gateway integration. A new designer joins the team: Priya. She\'s transferred from the Mumbai office. In her first standup, she asks a question that isn\'t about design — she asks the engineering lead why a particular error flow was built the way it was. It\'s a genuine question, not a challenge. Rohan notices. Over the next few days, he registers small things: she double-checks the brief even after it\'s approved, she takes an 11am coffee walk every day to the same Nespresso machine, and she eats her lunch at her desk while reading something on her phone — not scrolling Instagram, actually reading. He files these away without acting on them. He knows that in an office, the line between "interested" and "creepy colleague" is thin, and the cost of misreading is high — HR exists, and reputations stick.',
      his: 'Okay don\'t be weird about it. You\'re a senior engineer, she\'s a new designer, you\'re on the same team. Notice, file it away, and stop looking over there every five minutes.',
      her: 'That guy in standup asked a genuinely good question about the error flow. Most engineers don\'t think about the design side. Noted. But I\'m not here to date coworkers — I transferred here to grow my career.',
      messages: [],
      deepDive:
        'In an Indian office context, the "notice" phase is loaded with risk. Unlike a café or a club, you can\'t just walk away if things go wrong — you\'re going to see this person every day, in standups, in reviews, in the pantry. The professional cost of misreading interest is real: an uncomfortable complaint to HR, a reputation in the team group chat, or being frozen out of projects. So the first rule of noticing a colleague is simple: notice, but don\'t act on it yet. You don\'t know her. You know a projection — the version of her that shows up in a 15-minute standup. The real person might be completely different. Give it time. Let the data accumulate. The consistency of her habits (same coffee time, same reading-at-lunch pattern) tells you more about who she is than a single glance ever could. In Indian offices specifically, there\'s also the cultural backdrop of office gossip — the "did you hear about X and Y?" pipeline that runs through every tea break and cigarette balcony. Don\'t give it material. Don\'t tell your work friend "I think the new designer is cute" in week one. That becomes the story before there\'s even a story.',
      tip: 'Noticing someone is normal — stay curious, not fixated. You only know a projection of them so far. In an office, the professional cost of acting too early is much higher than the cost of waiting.',
      dont: 'Don\'t start naming her to mutual friends or work colleagues before a real conversation happens. Office gossip spreads faster than any Slack message.',
    },
    {
      num: 2,
      title: 'Overthinking',
      timeframe: 'Week 2',
      story:
        'Priya posts a design file in the team\'s Figma channel — a redesign of the onboarding flow. Rohan is tagged for review. He opens it, looks at it carefully, and wants to leave a comment. Not "looks good!" — that\'s what everyone writes. He wants to say something specific. He drafts three versions. Version 1: "Love the spacing on the nav." Too much. Version 2: "The error state on step 3 is really clear." Better, but is it too detailed? Version 3: "This is clean. The progress indicator on step 2 is smart — we should use that pattern in the payments flow too." He sends Version 3. It\'s genuine — he actually thinks the pattern is reusable. Meanwhile, Priya notices that Rohan is the first to review her file, and his comment is the only one that references a specific design decision, not a generic "nice work." She doesn\'t know if he\'s just thorough with everyone or if this means something. She decides not to read into it yet.',
      his: 'Is "looks good!" too plain? Is "love the spacing on the nav" too much? Just say something real about the actual work. If I\'m going to comment, it should be a comment I\'d make on anyone\'s file — not a special performance for her.',
      her: 'He reviewed my file first. His comment is the only one that mentions a specific design decision. Either he\'s genuinely thorough, or... no. Don\'t read into it. He\'s an engineer who cares about UX. That\'s just who he is. Don\'t project.',
      messages: [
        { from: 'him', text: 'This is clean. The progress indicator on step 2 is smart — we should use that pattern in the payments flow too.', time: 'Figma comment · 11:42 AM' },
        { from: 'her', text: 'Thanks! I was worried the progress indicator was too subtle. Good to know it reads. Happy to share the component with the payments team.', time: 'Figma reply · 11:58 AM' },
        { from: 'him', text: 'That would be great. I\'ll loop in Ankit from payments.', time: 'Figma reply · 12:01 PM' },
      ],
      deepDive:
        'The overthinking phase is where most Indian men either go too big or too small. Too big: the "hey, loved your work, want to grab coffee and discuss design?" message in week two — it\'s too much, too fast, and in an office it creates an obligation she didn\'t ask for. Too small: the "looks good!" comment that could\'ve been written by a bot. The sweet spot is what Rohan did — a specific, genuine observation about the actual work. It\'s not special treatment; it\'s the kind of comment a good colleague would make. The test is: would you leave this exact comment on a male colleague\'s file? If yes, send it. If it\'s calibrated differently because she\'s a woman, don\'t send it — she\'ll feel the difference even if she can\'t name it. The other thing happening here is that Priya is doing her own overthinking. She\'s noticed the pattern (he reviews her work first, his comments are specific) but she\'s actively choosing not to project meaning onto it. This is a sign of emotional maturity, and it\'s also self-protection — she\'s new to the team, she doesn\'t want to misread a colleague\'s professional interest as personal interest and create an awkward dynamic. Both people are doing the same thing: noticing, but holding off on interpreting. That patience is what makes the next phase possible.',
      tip: 'Lower the stakes — one honest, specific sentence beats three edited ones. The test: would you say this to a male colleague? If yes, send it. If it\'s calibrated differently because she\'s a woman, don\'t.',
      dont: 'Don\'t wait for the "perfect line" — but also don\'t send a comment that\'s obviously calibrated differently because you\'re attracted to her. She\'ll feel the difference.',
    },
    {
      num: 3,
      title: 'First Real Conversation',
      timeframe: 'Week 3',
      story:
        'It happens by accident. Both reach for the same Nespresso machine in the pantry at 11am. She\'s waiting for her coffee; he\'s waiting for his. He notices a food festival poster on the notice board behind her — the Indiranagar Food Walk. He asks, "Have you been to that? The Indiranagar food walk?" She hasn\'t, but she\'s been meaning to. They talk for four minutes — about the food walk, about her move from Mumbai, about how Bengaluru\'s Indiranagar compares to Mumbai\'s Bandra. He asks about Mumbai because she mentioned it, not because he\'s performing interest. At the four-minute mark, his coffee is done. He says, "Well, welcome to Bengaluru. The food walk is worth it — especially the filter coffee stall at the end." And he walks back to his desk. He leaves first. Not dramatically, not mid-sentence — just naturally, because his coffee is done and he has a ticket to fix.',
      his: 'Ask about the poster, not about her. Keep it four minutes. Walk away first. If there\'s something here, there\'ll be other conversations. Don\'t turn a coffee machine moment into a interrogation.',
      her: 'He asked about something specific I might care about — the food walk — not "so where are you from" generic stuff. And he left after four minutes. He didn\'t hover. He didn\'t linger. That\'s... rare.',
      messages: [],
      deepDive:
        'The first real conversation in an office setting has a golden rule: leave first. Not because you\'re playing a game, but because it signals that you\'re not desperate for her attention, and it respects the fact that she\'s at work — she didn\'t come to the pantry to be cornered. In Indian offices, the pantry is the default social space — it\'s where the chai breaks happen, where the gossip flows, where the "what did you have for lunch" conversations live. A four-minute pantry conversation is normal. A twenty-minute one where you\'re clearly lingering is not. Rohan asked about something specific (the food walk poster) rather than generic small talk ("so how are you liking Bengaluru?"). Specific questions work because they show you\'re paying attention to your environment, not just to her. Generic questions feel like a script. Also notice: he didn\'t ask for her number, didn\'t suggest they go to the food walk together, didn\'t say "we should check it out sometime." That would\'ve been too much for a first conversation. He planted a seed (the filter coffee stall at the end) and left. If she\'s interested, she\'ll bring it up later. If she doesn\'t, he hasn\'t made anything awkward.',
      tip: 'Ask about something specific you noticed (a poster, a book, a project detail), not generic small talk. And leave first — it signals you\'re not desperate and respects the fact that she\'s at work.',
      dont: 'Don\'t turn it into a monologue about yourself. Don\'t suggest plans together in the first conversation. Don\'t linger at the coffee machine hoping she\'ll keep talking.',
    },
    {
      num: 4,
      title: 'Building Rapport',
      timeframe: 'Weeks 4–7',
      story:
        'Over the next month, a pattern forms. They have lunch together on Wednesdays — not planned, just both happen to eat at 1pm at the same table in the cafeteria. It becomes "their thing" without either naming it. A running joke develops around a genuinely terrible error message in their app: "Something went wrong. Please try again later." They\'ve both complained about it in reviews, and it becomes a shorthand — when anything goes wrong, one of them texts the other "something went wrong, please try again later" and they both laugh. Rohan remembers, without being told, that Priya doesn\'t eat mushrooms — she mentioned it once, offhand, in week 3, when the cafeteria had mushroom masala. On a Wednesday in week 6, he orders a shared plate of paneer tikka without mushrooms and splits it. He doesn\'t announce "I remembered you don\'t eat mushrooms." He just orders accordingly. She notices.',
      his: 'I said nothing about it. I just ordered the mushroom-free version and split it. If she notices, she notices. If she doesn\'t, it\'s still the right thing to do. Let the action speak. Announcing it would make it a performance.',
      her: 'He remembered the mushrooms. From one offhand comment three weeks ago. He didn\'t announce it — he just ordered. That\'s not someone performing "good guy." That\'s someone who actually pays attention.',
      messages: [
        { from: 'him', text: 'Something went wrong. Please try again later. 🙃', time: 'Slack DM · 3:14 PM' },
        { from: 'her', text: 'lmao not this again. I\'m going to put a post-it on that error message\'s JIRA ticket', time: '3:16 PM' },
        { from: 'him', text: 'please do. I\'ll second it', time: '3:17 PM' },
        { from: 'her', text: 'also thanks for the paneer today. i noticed.', time: '3:22 PM' },
        { from: 'him', text: 'noticed what', time: '3:23 PM' },
        { from: 'her', text: 'no mushrooms. you remembered.', time: '3:24 PM' },
        { from: 'him', text: 'oh that. yeah. not a big deal', time: '3:25 PM' },
      ],
      deepDive:
        'This is the phase where trust is built — not through grand gestures but through accumulated small ones. In an Indian office context, the cafeteria is the relationship-building space. Sharing lunch is normal; consistently sharing lunch with the same person is a signal, even if neither of you names it. The mushroom detail is the key moment here. Rohan remembered something Priya said once, three weeks ago, and acted on it without announcing it. This is the highest-signal thing a man can do in the rapport phase: demonstrate that you listen, retain, and act — without making it a performance. Most men either don\'t remember (low signal) or remember and announce it ("hey, I got the no-mushroom version because you said you don\'t like mushrooms!") which turns it into a transaction — I did this for you, now acknowledge it. The silent version is more powerful because it shows the care is genuine, not performative. The running joke about the error message is also important — shared humor is one of the fastest trust-builders. It creates a private language between two people, a reference point that belongs only to them. In an office where everything is professional and structured, a shared joke is a small territory of intimacy. It says: "we have something that\'s ours, not the team\'s."',
      tip: 'Small consistent gestures build trust faster than grand ones. Remembering a detail and acting on it silently — without announcing it — is the highest-signal move in the rapport phase.',
      dont: 'Don\'t manufacture constant "accidental" run-ins. Don\'t announce your thoughtful gestures ("I got the no-mushroom version for you!") — let the action speak. Announcing turns care into a transaction.',
    },
    {
      num: 5,
      title: 'Exchanging Numbers & Texting',
      timeframe: 'Week 8',
      story:
        'A work trip to the Pune office gives a natural reason to exchange numbers. Rohan is going for a tech talk; Priya is going to meet the design team there. They need to coordinate travel from the airport. He asks for her number in the team Slack — "Priya, can you share your number? We can coordinate the cab from Pune airport." It\'s professional, public, and has a real reason. She shares it. Over the two days in Pune, they\'re in the same cab, the same office, the same dinner. The texting starts as logistics: "flight landed, where are you," "cab in 10 mins," "dinner at 8?" But after the trip, the texting doesn\'t stop. Within a week, it drifts from "did the deploy go through" to "what\'s your actual favourite biscuit with chai." She sends a voice note. She doesn\'t send voice notes to colleagues.',
      his: 'She replied with a paragraph about Bourbon vs Hide & Seek biscuits. This is no longer about the deploy. And she sent a voice note. I\'ve never heard her send a voice note in the team Slack.',
      her: 'I sent him a voice note. I don\'t send voice notes. Not to colleagues, not to my college friends. What is happening. Okay. This is a thing now. I need to be honest with myself about that.',
      messages: [
        { from: 'him', text: 'hey did the deploy go through? checking the status page', time: 'WhatsApp · 9:30 PM' },
        { from: 'her', text: 'yeah all green. finally. that staging bug was killing me', time: '9:32 PM' },
        { from: 'him', text: 'same. celebrated with chai and a Bourbon biscuit', time: '9:33 PM' },
        { from: 'her', text: 'Bourbon?? over Hide & Seek?? this is a hill I will die on. Bourbon is too sweet and crumbles in chai. Hide & Seek is structurally superior for dipping.', time: '9:35 PM' },
        { from: 'him', text: 'structurally superior 😂 okay you\'re speaking like a UX designer about biscuits', time: '9:36 PM' },
        { from: 'her', text: 'design is everywhere. even in biscuit dunking.', time: '9:37 PM' },
        { from: 'her', text: '[voice note · 0:47]', time: '9:38 PM' },
        { from: 'him', text: 'okay you just sent a voice note about biscuits and I\'ve never heard you send one in the team channel. I\'m honoured 😄', time: '9:41 PM' },
        { from: 'her', text: 'don\'t let it get to your head. but yeah. this is nice.', time: '9:43 PM' },
      ],
      deepDive:
        'The move from Slack to WhatsApp is a significant threshold in an office dynamic. Slack is the office — it\'s visible to the team, it\'s professional, it\'s logged. WhatsApp is personal. When Rohan asked for her number, he did it publicly in Slack with a professional reason (cab coordination). That\'s the right way: a real pretext, in a visible channel, no ambiguity. He didn\'t DM her on Slack asking for her number — that would\'ve been weird. The Pune trip was the bridge — a natural context where professional and personal blur. Shared cabs, shared dinners, a different city. After the trip, the key signal is the drift: from logistics to personal. Notice that neither of them "asked" to keep texting. It just happened — the deploy question led to biscuits, biscuits led to a voice note, and the voice note was the moment. In Indian texting culture, voice notes are intimate. They carry tone, breath, hesitation — things text strips out. When Priya sends a voice note about biscuits, she\'s not talking about biscuits anymore. She\'s saying: "I\'m comfortable enough with you to let you hear my actual voice, not just my typed words." Rohan catches this — he notices she\'s never sent a voice note in the team channel. That observation matters. He\'s not just receiving the signal; he\'s understanding what it means. The rule for this phase: match the other person\'s texting rhythm. If she takes two hours to reply, don\'t reply in two minutes. If she sends a paragraph, you can send a paragraph. If she sends one line, don\'t send five. Matching rhythm is respect; chasing rhythm is desperation.',
      tip: 'Match the other person\'s texting rhythm — don\'t chase it. The move from Slack to WhatsApp is a real threshold; the drift from logistics to personal is the signal. Voice notes are intimate in Indian texting culture — don\'t miss what they mean.',
      dont: 'Don\'t read into response times, and don\'t send five messages before getting one reply back. Don\'t DM her on Slack asking for her number without a professional reason.',
    },
    {
      num: 6,
      title: 'The Talking Stage',
      timeframe: 'Weeks 9–14',
      story:
        'Weekend calls stretch past midnight. They start on a Saturday with "quick call about the new design system" and end at 1am with Priya telling Rohan about her strained relationship with her father — he\'s a sweet man but he has a temper, and growing up, she learned to read his moods before she learned to have her own. Rohan doesn\'t flinch. He doesn\'t say "that sucks" and change the subject. He doesn\'t try to fix it. He says, "That\'s heavy. Thank you for telling me." And then he tells her about his own thing — he nearly dropped out of college in his second year. His father had a heart attack, and he had to take a year off to work and support the family. He went back, finished, but he still feels like he\'s catching up. Neither of them runs from the vulnerability. The next Monday at work, everything is normal — they\'re professional in standup, they don\'t touch the personal stuff in the office. But they both know something shifted.',
      his: 'She told me the hard thing about her father. I don\'t have to fix it. I don\'t have to analyse it. I just have to not flinch — to stay in the conversation instead of changing the subject. And then I told her my own thing. The college year. I haven\'t told anyone at work that.',
      her: 'I told him about Papa and he didn\'t change the subject. He didn\'t say "that\'s tough, anyway." He stayed. And then he told me something real about himself. That told me more about who he is than any confession or compliment would.',
      messages: [
        { from: 'him', text: 'hey, quick call about the design system tokens? got some questions', time: 'WhatsApp · Saturday 8:15 PM' },
        { from: 'her', text: 'yeah sure, calling', time: '8:16 PM' },
        { from: 'her', text: 'okay that was not a quick call 😅', time: '1:02 AM' },
        { from: 'him', text: 'no it was not. but I\'m glad we talked.', time: '1:03 AM' },
        { from: 'her', text: 'me too. I don\'t usually tell people about papa. I don\'t know why I told you.', time: '1:05 AM' },
        { from: 'him', text: 'I\'m glad you did. I told you something I haven\'t told anyone here either. so. yeah.', time: '1:07 AM' },
        { from: 'her', text: 'see you Monday. and let\'s keep work, work. this is ours.', time: '1:08 AM' },
        { from: 'him', text: 'agreed. work is work. this is ours. goodnight Priya.', time: '1:09 AM' },
      ],
      deepDive:
        'The talking stage in an office relationship has a unique challenge: you\'re in two relationships at once — the professional one and the personal one — and they share the same person. The boundary between them has to be actively maintained. Rohan and Priya do this well: on Monday, they\'re professional. No lingering glances in standup, no private jokes in the team channel. The personal stuff lives in the evenings and weekends. This isn\'t hiding — it\'s compartmentalising, which is a healthy skill, not a deceptive one. The vulnerability exchange is the heart of this phase. Priya shared something hard (her father\'s temper) and Rohan responded with the only correct response: presence, not fixing. "That\'s heavy. Thank you for telling me." Then he matched it with his own vulnerability (the college year, his father\'s heart attack). This is the reciprocity principle: vulnerability invites vulnerability. When one person opens up and the other responds with their own real thing, trust deepens exponentially. But note: Rohan didn\'t one-up her. He didn\'t say "you think your dad has a temper, let me tell you about mine." He acknowledged hers first, held space for it, and then offered his own. In Indian cultural context, the "father" conversation is loaded. Fathers in Indian families are often authority figures whose moods govern the household. Admitting that your father\'s temper shaped you is not a casual disclosure — it\'s a deep trust signal. And the college year story — having to leave college to support the family — touches the Indian middle-class reality where education and family duty are constantly in tension. These aren\'t random personal details; they\'re the core of who these people are.',
      tip: 'In an office talking stage, actively maintain the professional/personal boundary — compartmentalising is healthy, not deceptive. When someone shares something hard, the correct response is presence, not fixing. Then match it with your own real vulnerability — but don\'t one-up.',
      dont: 'Don\'t stay in undefined ambiguity indefinitely out of fear of an awkward conversation. Don\'t bring the personal stuff into the office — no private jokes in the team channel, no lingering in standup.',
    },
    {
      num: 7,
      title: 'The First Date',
      timeframe: 'Week 15',
      story:
        'Rohan asks directly. Not over text — in person, after work, walking to the metro. He says: "I\'d like to take you on a date. Not a work dinner, not a hangout — a date. This Saturday, 7pm, at Toit?" Toit is a brewpub in Indiranagar she\'s mentioned wanting to try. He picks a specific day, a specific time, and a place she\'s expressed interest in. She says yes immediately — no performative hesitation, no "let me check my schedule." She says, "Yes. Saturday. I\'ve been wanting to go to Toit." They both know this is the first time they\'ll be together outside of a work context — no standup, no Slack, no cafeteria, no shared project. Just them.',
      his: 'Say the word "date." Pick a day. Pick a place she\'s mentioned. If it\'s a no, better to know now than in month four of "we should hang out sometime." Directness is respect — it lets her make a real decision.',
      her: 'He said "date." Out loud. No "we should hang out sometime" fog. No "let\'s grab a bite." He named it, picked a day, picked a place I said I wanted to try. I said yes immediately because I\'ve been waiting for him to say it.',
      messages: [
        { from: 'him', text: 'hey, I said something walking to the metro today and I want to make sure you didn\'t think I was joking. I\'d like to take you on a date. Saturday, 7pm, Toit. You in?', time: 'WhatsApp · 8:30 PM' },
        { from: 'her', text: 'I know you weren\'t joking. Yes. Saturday. Toit. I\'ll book the table.', time: '8:33 PM' },
        { from: 'him', text: 'no no I\'m booking. it\'s a date, I asked, I book.', time: '8:34 PM' },
        { from: 'her', text: 'okay fine. but I\'m choosing the appetiser.', time: '8:35 PM' },
      ],
      deepDive:
        'The first date ask is where most Indian men falter — not because they can\'t ask, but because they ask badly. The three common failure modes: (1) The vague invite: "we should hang out sometime." This isn\'t an ask — it\'s a fog. It puts the burden on her to figure out if it\'s a date, and if it is, when and where. (2) The disguised group hang: "a bunch of us are going to Toit, you should come." This is plausible deniability — if she says no, you save face. But it also means she can\'t say yes to a date, because you haven\'t offered one. (3) The text-only ask: "hey, want to go on a date sometime?" over WhatsApp at 11pm. This is low-effort and low-stakes, and it shows. Rohan does it right: in person, specific (day, time, place), and he uses the word "date." The place matters — Toit is somewhere she\'s mentioned wanting to try. This shows he\'s been listening, and it removes the "where should we go" negotiation that makes first dates feel like project planning. Her response is equally important: she says yes immediately. No "let me check," no "maybe," no 45-minute delay to seem busy. Immediate yes is a signal too — it says "I\'ve been waiting for this and I\'m not going to pretend I haven\'t." In Indian dating culture, there\'s often a performative hesitation — the "I need to think about it" that\'s actually a yes but needs to look like deliberation. Priya skips that. It\'s a sign of confidence and honesty.',
      tip: 'Directness and a clear, low-pressure invite beats a vague "we should hang out sometime." Say the word "date." Pick a specific day, time, and place she\'s mentioned. Let her say yes or no to a real question.',
      dont: 'Don\'t disguise a date as a group outing and hope she "figures it out." Don\'t ask over text at 11pm. Don\'t make her decide the where and when — you asked, you plan.',
    },
    {
      num: 8,
      title: 'Defining the Relationship',
      timeframe: 'Week 17',
      story:
        'Two weeks after the first date, they\'ve been on three. On a Sunday walk through Cubbon Park, Rohan asks: "I want to ask you something, and you can take time to answer. Do you want this to be just the two of us? Because I do." She says yes. But then she brings up the thing they\'ve both been thinking: the office. "If we\'re doing this, how do we handle work? Do we tell the team? Do we tell our manager? What happens if people find out?" They talk about it for forty minutes, sitting on a bench. They agree: they won\'t hide it, but they won\'t announce it. If someone asks, they\'ll be honest. They\'ll tell their manager together, not one person deciding for both. And they agree that if it doesn\'t work out, they\'ll both be professional about it — no making the team choose sides.',
      his: 'I asked the question out loud. "Do you want this to be just us." Not "what are we" — that\'s vague. A real question. And then she raised the work thing, which I\'d been thinking about too. We agreed on it together, not me deciding for both of us.',
      her: 'He asked. He didn\'t assume. And he cared about the same work question I was scared to bring up. We made a plan together — tell the manager together, don\'t hide, don\'t announce. That\'s partnership, not just romance.',
      messages: [
        { from: 'him', text: 'hey. cubbon park walk today? I have something I want to ask you, and it\'s fine if you need time.', time: 'WhatsApp · Sunday 10:00 AM' },
        { from: 'her', text: 'okay. yes. I might have something too.', time: '10:02 AM' },
        { from: 'her', text: 'so. the office thing. if we\'re doing this — and I think we are — what\'s the plan? do we tell people?', time: 'after the walk · 5:14 PM' },
        { from: 'him', text: 'I think we tell our manager together. not hide, not announce. and if anyone asks, we\'re honest. what do you think?', time: '5:18 PM' },
        { from: 'her', text: 'yes. together. and Rohan — if this doesn\'t work out, we don\'t make the team choose. we\'re adults.', time: '5:20 PM' },
        { from: 'him', text: 'agreed. we\'re adults. we\'re also a team at work, and that doesn\'t stop because of this.', time: '5:21 PM' },
      ],
      deepDive:
        'Defining the relationship (DTR) in an office context is two conversations, not one. The first is the romantic one: "do we want this to be just us?" The second is the practical one: "how do we handle this at work?" Most couples do the first and skip the second, which is why office relationships often implode — not because the romance fails, but because the professional dynamic becomes unmanageable. Rohan and Priya do both. The DTR question itself is well-framed: "Do you want this to be just the two of us? Because I do." It\'s a real question, not a "what are we" fog. It gives her room to answer honestly, including no. And it\'s in person, on a walk, in a low-pressure setting — not over text, not in a restaurant with a waiter hovering. The work conversation is where the maturity shows. In Indian offices, dating a colleague is still somewhat taboo — not because it\'s forbidden, but because it becomes gossip. The team group chat will talk about it. The "did you see them at lunch together" whispers will start. Having a plan — tell the manager together, don\'t hide, don\'t announce, be honest if asked — is the adult way to handle it. The "if it doesn\'t work out" clause is crucial. It\'s not pessimism; it\'s realism. Acknowledging that a breakup is possible and agreeing to handle it professionally is the ultimate sign of maturity. It says: "I\'m committed to this, but I\'m also committed to not destroying our professional lives if it ends."',
      tip: 'DTR works best as a real question — "do you want this to be just us?" — not a vague "what are we." In an office relationship, DTR is two conversations: the romantic one and the practical one. Do both. Agree on how to handle work together, not one person deciding for both.',
      dont: 'Don\'t assume you\'re "official" just because dates went well — say it out loud. Don\'t skip the work conversation — it\'s the one that determines whether an office relationship is sustainable.',
    },
    {
      num: 9,
      title: 'Meeting Family & Long-Term',
      timeframe: 'Months 6–10',
      story:
        'Priya introduces Rohan to her parents over Diwali. Not a formal "meet the parents" dinner — her parents are visiting Bengaluru for the festival, and Priya invites Rohan to join them for Diwali lunch at her flat. She\'s cooked (with help from her mother). Her father is quiet but watches Rohan carefully. Her mother asks the standard Indian mother questions: "What do you do? Where is your family from? Do you have siblings?" Rohan answers honestly — he\'s from a middle-class family in Lucknow, his father had a health scare a few years ago, he supported the family through it. Priya\'s mother softens. Her father asks one question: "Do you drink?" Rohan says, "Occasionally, socially." Her father nods. That\'s it. A few months later, Rohan\'s parents visit from Lucknow. Priya meets them at his flat. His mother brings homemade peda and a saree for Priya. His father asks about her work, her family, her caste — Rohan gently redirects the caste question. It\'s not perfect, but it\'s real.',
      his: 'I didn\'t push the family meeting. When it happened — Diwali lunch — it happened because she was ready, not because I demanded to meet her parents. And when my dad asked about caste, I redirected. I\'m not going to let that define us.',
      her: 'I introduced him when I wanted to, not when the timeline said I should. Diwali lunch at my flat, with my mom\'s help. My dad asked one question — "do you drink" — and that was his whole vetting process. It went okay because it was on my terms.',
      messages: [
        { from: 'her', text: 'my parents are coming for Diwali. I\'d like you to come for lunch. no pressure — they\'re just going to be there and I want you to meet them.', time: 'WhatsApp · 2 weeks before Diwali' },
        { from: 'him', text: 'I\'d like that. what should I bring? sweets?', time: 'same evening' },
        { from: 'her', text: 'just yourself. maybe some kaju katli if you want. don\'t overthink it. my dad is going to ask you like two questions and then go back to watching cricket.', time: 'same evening' },
        { from: 'him', text: 'okay. kaju katli and myself. I\'m a little nervous but okay.', time: 'same evening' },
        { from: 'her', text: 'don\'t be. he\'s going to love you. you re-rack your weights at the gym — that\'s basically his standard for a good man. wait wrong scenario. you remember the mushroom thing. that\'s his standard.', time: 'same evening' },
      ],
      deepDive:
        'Meeting the family in an Indian context is not a single event — it\'s a process, and it\'s loaded with cultural weight. The "meet the parents" dinner that Western dating culture normalises doesn\'t map cleanly onto Indian reality. In most Indian families, introducing a partner means the relationship is "serious" — and "serious" in Indian family logic often means "heading toward marriage." So the timing matters enormously. Priya introduces Rohan at six months — not because a rule says six months, but because she\'s ready. She does it on her terms: Diwali lunch at her flat, casual, with her mother\'s help. It\'s not a staged performance at a restaurant. It\'s ordinary life, which is actually more revealing — Rohan sees how Priya is with her parents, how her parents are with each other, what the family dynamic actually is. The father\'s questions are telling. "Do you drink?" is an Indian father\'s proxy for "are you a responsible person?" It\'s not really about alcohol — it\'s about self-control. Rohan\'s honest answer ("occasionally, socially") passes the test because it\'s honest, not because it\'s the "right" answer. On Rohan\'s side, the caste question is the moment. His father asks about Priya\'s caste — this is still common in Indian families, even in 2024. Rohan redirects gently, not aggressively. He doesn\'t lecture his father; he just steers the conversation to her work. This is the right approach — you can\'t change your parents\' worldview in one conversation, but you can set a boundary about what determines your relationship. The homemade peda and saree from his mother are the Indian mother\'s love language — acceptance through food and cloth. It\'s not a verbal "welcome to the family"; it\'s a material one.',
      tip: 'This works best from genuine readiness, not external pressure or timeline comparison. In Indian families, introducing a partner implies "serious" — so do it on your terms, in ordinary settings, not staged performances. When family asks about caste, redirect gently — set the boundary without lecturing.',
      dont: 'Don\'t let family expectations or comparison to others dictate your pace. Don\'t stage a performative family meeting to "lock in" the relationship. Don\'t let a caste question derail the meeting — redirect, don\'t lecture.',
    },
  ],
};
