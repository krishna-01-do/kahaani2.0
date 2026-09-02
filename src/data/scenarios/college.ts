import type { Scenario } from '../types';

export const collegeScenario: Scenario = {
  id: 'college',
  setting: 'College / Campus',
  city: 'Pune',
  blurb: 'A canteen meeting, a group project, fest committees, and exam-season texting — from strangers to telling friend groups.',
  hisName: 'Ishaan',
  herName: 'Meera',
  hisRole: 'Economics major, fest volunteer',
  herRole: 'Literature major, same year',
  chapters: [
    {
      num: 1,
      title: 'Notice',
      timeframe: 'Week 1',
      story:
        'Ishaan is a second-year Economics major at Fergusson College, Pune. He volunteers for the college fest — handling the budget spreadsheet, which nobody else wants to do. He eats lunch at the canteen between classes — the one near the main gate, not the one near the library, because the main-gate canteen has better misal pav and worse seating, which means fewer people. One day in August, he sees a girl in the corner of the canteen, reading a book while eating her misal, completely unbothered by the noise around her. She\'s there most days — same corner, same focus, same misal. He notices but doesn\'t approach. He doesn\'t know her name, her major, or her year. He just knows she reads in the loudest canteen on campus, which means she\'s either very focused or very stubborn. Both are interesting.',
      his: 'She\'s reading in the loudest canteen on campus. Either she\'s very focused or very stubborn. Either way — noted. But don\'t be the guy who asks around the hostel for "who is she." You don\'t even know her name yet.',
      her: 'There\'s a guy two tables away who keeps almost looking over. I\'m going to ignore it until it becomes a real thing. Right now it\'s nothing. I\'m reading.',
      messages: [],
      deepDive:
        'On an Indian college campus, the "notice" phase is both easier and more dangerous than in other settings. Easier because the campus is a closed ecosystem — you\'ll see the same people every day, in the same canteen, the same library, the same corridors. The data accumulates naturally. More dangerous because the campus gossip network is ferocious. In Indian colleges, the "who likes whom" pipeline runs through hostel rooms, WhatsApp groups, and the back benches of every lecture. If Ishaan asks a friend "who\'s that girl in the canteen," that friend will tell another friend, and by evening, the whole economics batch will "know" he\'s interested. So the first rule of noticing on campus is: notice quietly. Don\'t ask around. Don\'t have your friend ask around. Don\'t "accidentally" sit at her table. Just let the noticing accumulate. The canteen is the natural observation point of any Indian campus — it\'s where people eat, study, argue, and exist between classes. The fact that Meera reads in the loudest canteen, not the quiet library, tells Ishaan something: she\'s comfortable in chaos. She doesn\'t need silence to focus. That\'s a character detail, not just a habit. But he doesn\'t know her yet — he knows a projection. The real person might be completely different. Patience.',
      tip: 'Campus makes noticing easy — but noticing is not knowing. Stay curious, not fixated. The campus gossip network is ferocious — don\'t ask around about her before you\'ve even spoken.',
      dont: 'Don\'t ask around the hostel or friend group for "who is she" before you\'ve even spoken. In Indian colleges, that question becomes gossip by evening.',
    },
    {
      num: 2,
      title: 'Overthinking',
      timeframe: 'Week 2',
      story:
        'They get assigned to the same group-project team for a sociology elective — "Contemporary Indian Society," taught by a professor who\'s known for assigning group projects that nobody wants. Ishaan opens the WhatsApp group (created by the class rep) and sees Meera\'s name. He drafts and deletes three different ways to say "hey, should we start a WhatsApp group for the project" — before realising they\'re already in a WhatsApp group for the project. He just sends: "Hey everyone, should we meet in the library Thursday to divide the work?" Plain. Functional. Meera replies first: "Thursday works. 3pm?" She\'s the only one who\'s read the syllabus. Ishaan notices that too — she didn\'t ask "what\'s the topic," she already knows. She\'s done the reading.',
      his: 'It\'s a WhatsApp group for a project. Just say "hey should we meet to divide the work." Why did I rewrite this four times. She replied first. She already knows the topic. She\'s done the reading. That\'s... attractive. Focus on the project.',
      her: 'He\'s the only one who suggested a meeting time. Everyone else said "yeah sure" with no plan. He\'s either diligent or he actually cares. Either is fine. Let\'s see how the meeting goes.',
      messages: [
        { from: 'him', text: 'hey everyone, should we meet in the library Thursday to divide the work?', time: 'WhatsApp group · 7:14 PM' },
        { from: 'her', text: 'Thursday works. 3pm? I\'ve read the syllabus, I can share what I think the sections should be.', time: '7:18 PM' },
        { from: 'him', text: '3pm works. see you all there.', time: '7:19 PM' },
      ],
      deepDive:
        'The group project is the lowest-pressure excuse to talk on an Indian campus. It\'s built-in: you\'re assigned to a team, you have to communicate, and the WhatsApp group is created for you. You don\'t need to engineer a reason to talk — the assignment gave you one. The overthinking here is Ishaan drafting three versions of a message that should\'ve been one line. This is universal: when you\'re attracted to someone, your brain treats every message as a performance. The fix is what Ishaan eventually does — send the plain version. "Hey everyone, should we meet Thursday." No cleverness, no calibration, just function. Meera\'s reply is the signal: she replies first, and she\'s already done the reading. In Indian college culture, there\'s a spectrum: some students are deeply invested in academics, some are there because their parents sent them. Meera is clearly the former. Ishaan noticing that she\'s done the reading — and finding it attractive — tells you what he values. He\'s not attracted to just her looks; he\'s attracted to her competence. The group project is also a low-risk observation lab: you get to see how someone works in a team, how they handle disagreement, how they divide labour. All of that is relationship data disguised as academic logistics.',
      tip: 'A group project is the world\'s lowest-pressure excuse to talk — use the excuse, don\'t overthink the first message. One functional line beats three edited ones. How someone works in a team is relationship data disguised as academic logistics.',
      dont: 'Don\'t wait for the "perfect opener" when a shared assignment already handed you one. Don\'t draft and redraft a one-line WhatsApp message — send the plain version.',
    },
    {
      num: 3,
      title: 'First Real Conversation',
      timeframe: 'Week 3',
      story:
        'The group meets in the library. Everyone else drifts off after ten minutes — two people have lectures, one has a "thing" — leaving Ishaan and Meera at the table. They start arguing about whether the project\'s case study — a village-level ethnography from Madhya Pradesh — counts as proper ethnography or just journalism with academic framing. It\'s a real disagreement. Meera thinks the researcher\'s framing is too top-down; Ishaan thinks the data is solid even if the framing is imperfect. They go back and forth for twenty minutes, citing different scholars, before either of them notices the time. It\'s not flirting — it\'s a genuine intellectual argument. But it\'s also the first time they\'ve really talked, and the fact that they can disagree without either person backing down or getting personal is a signal neither of them names yet.',
      his: 'She pushed back on my point with an actual citation — she quoted Sundar Sarukkai on ethnographic method. I\'m either annoyed or impressed. Both, probably. We disagreed for twenty minutes and neither of us got defensive. That\'s... not normal.',
      her: 'He didn\'t agree with me just to agree. He made me defend my argument with evidence. That\'s more interesting than agreement. And he didn\'t get personal or condescending when I pushed back. Most guys either fold or get defensive.',
      messages: [],
      deepDive:
        'The first real conversation on a campus often happens in an academic context — a library, a seminar room, a project meeting. This is the campus\'s advantage: you get to see how someone thinks before you know anything about their personal life. Ishaan and Meera\'s argument about ethnography is the foundation of their connection. It\'s not flirting disguised as intellectual debate; it\'s genuine intellectual debate that happens to be attractive. The key signal is: neither person backs down, and neither person gets personal. In Indian college culture, there\'s a gendered pattern: some men either fold when a woman makes a strong argument (performative agreement, designed to seem "nice") or get defensive and condescending (mansplaining her own subject to her). Ishaan does neither — he engages with her argument on its merits. Meera notices this because she\'s experienced both failure modes before. The ability to disagree respectfully is one of the most reliable predictors of relationship quality. If you can\'t argue about a case study without someone getting hurt, you can\'t argue about anything real. The twenty-minute window is also important — they lost track of time. When a conversation makes you forget the time, that\'s a signal. Not of love at first sight, but of intellectual compatibility, which is a more durable foundation.',
      tip: 'A real, even slightly heated, conversation about something you both care about beats polite agreement. The ability to disagree respectfully — without folding or getting condescending — is one of the most reliable predictors of relationship quality.',
      dont: 'Don\'t perform disagreement to seem "intellectual" — actually engage with her point. Don\'t fold and agree just to seem "nice" — she\'ll see through it. Don\'t get condescending when she pushes back.',
    },
    {
      num: 4,
      title: 'Building Rapport',
      timeframe: 'Weeks 4–7',
      story:
        'The project wraps, but they keep sitting together in the canteen. It\'s not planned — they just show up at the same time. Ishaan remembers Meera takes her chai with less sugar. One day, he\'s at the canteen counter before her; he orders two chais — one regular, one with less sugar — and puts the less-sugar one at her seat when she arrives. He doesn\'t say "I remembered you take less sugar." He just puts it there. She picks it up, takes a sip, and knows. They start trading book recommendations. She recommends a novel — "The Ministry of Utmost Happiness" by Arundhati Roy. He buys it the next week from a second-hand bookshop on FC Road. Two weeks later, he comes back with actual thoughts — not "I liked it," but "the structure of the second half loses me, but the Anjum thread is the best writing about Kashmir I\'ve read in fiction." She\'s stunned. Most people say "oh I\'ll add it to my list" and never do.',
      his: 'I read the whole book she recommended. Not to impress her — because she has good taste and I wanted to talk about it with her. And I came back with an actual opinion, not "it was nice." If I\'m going to say I read it, I\'m going to have something to say about it.',
      her: 'He read it. He actually read it. And he came back with a real opinion — he disagreed with the structure of the second half. Most people just say "oh I\'ll add it to my list" and never do. He went to FC Road, bought it, read it, and thought about it. For me.',
      messages: [
        { from: 'her', text: 'have you read The Ministry of Utmost Happiness? you should. it\'s dense but worth it.', time: 'canteen · Tuesday' },
        { from: 'him', text: 'no, but I\'m going to. FC Road bookshop should have it.', time: 'same day' },
        { from: 'him', text: 'okay. finished it. the structure of the second half loses me — too many threads. but the Anjum thread is the best writing about Kashmir I\'ve read in fiction. and the man-who-was-a-woman thing — I didn\'t expect to feel that much.', time: 'two weeks later · WhatsApp' },
        { from: 'her', text: 'you actually read it. you didn\'t just say you would. and you disagreed with the structure — that\'s the most common criticism, but you came to it yourself. I\'m... impressed. genuinely.', time: 'same evening' },
        { from: 'him', text: 'you recommended it. I wasn\'t going to not read it.', time: 'same evening' },
      ],
      deepDive:
        'The rapport phase on a campus is built around two things: shared spaces (the canteen) and shared intellectual life (books, ideas, arguments). The chai detail is the same principle as the mushroom detail in the office scenario — remembering a preference and acting on it silently. Ishaan doesn\'t announce "I got you the less-sugar chai." He puts it at her seat. She picks it up and knows. The book recommendation is the bigger signal. In Indian college culture, book recommendations are a form of intellectual intimacy. When Meera recommends a novel, she\'s sharing a piece of her inner life — what she values, what moves her, what she thinks about. When Ishaan actually reads it — buys it from FC Road, finishes it, comes back with a real opinion — he\'s saying: "I take your inner life seriously." The opinion matters as much as the reading. He doesn\'t just say "it was great." He disagrees with part of it. This is crucial: performing agreement ("it was amazing, you were right about everything") is flattery, not engagement. Real engagement means bringing your own perspective, even if it includes disagreement. Meera is impressed not because he agreed with her but because he engaged with the book on its merits. The FC Road bookshop detail is also culturally specific — in Pune, FC Road (Fergusson College Road) is the second-hand book hub. Buying a book there instead of ordering on Amazon means he walked, browsed, and chose the physical object. That\'s effort that can\'t be faked.',
      tip: 'Following through on a recommendation (actually reading the book, coming back with a real opinion) is one of the highest-signal things you can do. Real engagement includes disagreement — performing agreement is flattery, not interest. Remembering a preference and acting on it silently (the chai) beats announcing it.',
      dont: 'Don\'t fake interest in her field just to seem compatible. Don\'t say "I\'ll add it to my list" and never do. Don\'t perform agreement — bring your own perspective, even if it includes disagreement.',
    },
    {
      num: 5,
      title: 'Exchanging Numbers & Texting',
      timeframe: 'Week 8',
      story:
        'They already have each other\'s number from the project WhatsApp group, but Ishaan texts her directly — not in the group — for the first time. The message: a photo of a second-hand copy of a book she\'d mentioned wanting — "Manto: Selected Stories" — that he found at the FC Road bookshop. "Found this. It\'s yours if you want it." From there, texting becomes daily. It starts about the book, then about other books, then about everything — professors, canteen food, the terrible AC in the economics department, the fest preparations. The project group chat goes quiet; their DM is alive every day.',
      his: 'I texted her one-on-one for the first time with a photo of a book she wanted. The book was the excuse. The text was the point. Moving from the group chat to a DM is a real step — I didn\'t do it with a "hey," I did it with something real.',
      her: 'He found the Manto I\'d been looking for. That\'s not a "hey what\'s up" — that\'s him listening to something I said weeks ago and acting on it. The group chat is dead. We\'re texting every day. This is different.',
      messages: [
        { from: 'him', text: '[photo: second-hand copy of "Manto: Selected Stories"]', time: 'WhatsApp DM · 6:45 PM' },
        { from: 'him', text: 'found this at FC Road. you said you\'d been looking for it. it\'s yours.', time: '6:45 PM' },
        { from: 'her', text: 'WAIT. you remembered that?? I said that like three weeks ago in the canteen. yes. obviously yes. how much was it?', time: '6:48 PM' },
        { from: 'him', text: '60 rupees. don\'t pay me back for a 60 rupee book 😄', time: '6:49 PM' },
        { from: 'her', text: 'okay fine. but I\'m buying you chai for a week. that\'s the deal.', time: '6:50 PM' },
        { from: 'him', text: 'deal.', time: '6:50 PM' },
        { from: 'her', text: 'also — have you read Toba Tek Singh? it\'s in that collection. read it first. call me after.', time: '6:52 PM' },
        { from: 'him', text: '"call me after." okay. reading now.', time: '6:53 PM' },
      ],
      deepDive:
        'Moving from a group chat to a direct message is a real threshold on a campus. In the group, you\'re one of several — your messages are public, your tone is calibrated for an audience. In a DM, you\'re one-on-one, and the conversation becomes personal. The key is the reason for the first DM. Ishaan doesn\'t send "hey" or "what\'s up" — he sends a photo of a book she\'d been looking for, found at a second-hand shop. This is the same principle as the office scenario\'s specific Figma comment: give the first DM a real reason, not a filler. The Manto book is perfect because it\'s specific (she mentioned it three weeks ago), it\'s thoughtful (he remembered and acted), and it\'s low-pressure (60 rupees, not a gift). Her response — "you remembered that??" — is the signal that this has crossed from "group project colleague" to "someone who listens to me." The "call me after" about Toba Tek Singh is a big step: she\'s inviting a phone call, not just a text exchange. In Indian college texting culture, moving from text to call is a threshold — calls are more intimate, more vulnerable, more real-time. She\'s saying: "I want to hear your voice about this, not just read your texts." The "chai for a week" deal is also culturally perfect — in Indian college life, chai is the universal currency. Buying someone chai for a week is both a thank-you and a commitment to seven more interactions.',
      tip: 'Moving from a group chat to a direct message is a real step — give it a real reason, not a "hey." A specific, thoughtful first DM (a found book, a shared reference) is worth ten "hey what\'s up" messages. Moving from text to call is the next threshold — let her invite it.',
      dont: 'Don\'t double-text in the group chat to get her attention when you could just message her directly with something real. Don\'t send "hey" as your first DM — give it a reason.',
    },
    {
      num: 6,
      title: 'The Talking Stage',
      timeframe: 'Weeks 9–14',
      story:
        'Exam season hits. The texting turns into late-night study-check-ins. They trade subjects — he\'s bad at literary analysis, she\'s bad at statistics, so they teach each other. He sends voice notes explaining standard deviation; she sends voice notes explaining postcolonial theory. Meera tells Ishaan about the pressure she\'s under from home — her parents are supportive of her education, but there\'s an underlying current: "score well or the marriage talks start." She\'s 21. Her aunt has already started sending "profiles." She tells Ishaan this at 1am, over a voice note, and he doesn\'t joke about it or change the subject. He says, "That\'s heavy. You\'re not even done with your degree. I\'m here if you want to talk about it." The next day, they\'re normal in the canteen — no dramatic follow-up, no awkwardness. But the 1am voice note changed something.',
      his: 'She told me about the marriage-talk pressure. At 1am. In a voice note. I didn\'t make a joke or change the subject. I just said that\'s heavy and I\'m here. What else do you say to something like that? She\'s 21 and her aunt is sending shaadi profiles.',
      her: 'I told him the thing I don\'t tell most people — the shaadi pressure, the profiles, the whole thing. He didn\'t minimise it or try to fix it. He just said "that\'s heavy, I\'m here." And then the next day in the canteen, everything was normal. That\'s what made it real — he didn\'t make it weird.',
      messages: [
        { from: 'her', text: '[voice note · 1:02 AM] "can I tell you something weird? my aunt sent three shaadi profiles today. I\'m 21. I have a stats exam on Thursday. I don\'t know how to tell her I\'m not... I\'m not there yet. I\'m not anywhere near there."', time: '1:02 AM' },
        { from: 'him', text: '[voice note · 1:08 AM] "that\'s heavy. you\'re not even done with your degree. you\'re not supposed to be \'there\' — you\'re supposed to be studying for stats. I\'m here. whenever you want to talk about it. also — standard deviation is just the average distance from the average. you\'ll be fine on Thursday."', time: '1:08 AM' },
        { from: 'her', text: '"also — standard deviation is just the average distance from the average." I\'ve been trying to understand this for three weeks and you just explained it in one sentence. I hate you. (thank you.)', time: '1:11 AM' },
        { from: 'him', text: 'you\'re welcome. go sleep. exam on Thursday. we\'ll talk about the other thing whenever you\'re ready.', time: '1:12 AM' },
      ],
      deepDive:
        'Exam season in Indian colleges is not just academic — it\'s also family-pressure season. The "score well or the marriage talks start" dynamic is real for many Indian women in college. It\'s not always overt; sometimes it\'s a current beneath the surface — supportive parents who still mention "your cousin got married last year" in the same breath as "focus on your studies." Meera\'s disclosure at 1am is a deep trust signal. She\'s telling Ishaan about something she doesn\'t tell most people — the shaadi profiles, the aunt, the pressure. And she\'s doing it in a voice note, which (as we\'ve established) is more intimate than text. Ishaan\'s response is textbook emotional intelligence: he doesn\'t minimise ("it\'s not that bad"), he doesn\'t fix ("you should tell your aunt no"), he doesn\'t joke ("haha want me to be your profile?"), and he doesn\'t change the subject. He says: "That\'s heavy. You\'re not even done with your degree. I\'m here." Then — crucially — he transitions to the exam help, because she has a stats exam on Thursday and the practical thing is to also address that. He doesn\'t let the emotional disclosure derail the academic support she also needs. The next day being normal in the canteen is the real test. If Ishaan had brought up the shaadi thing in public, it would\'ve been a violation of the intimacy of the 1am disclosure. By being normal, he signals: "What you shared at 1am stays at 1am. I\'m not going to make it a thing in daylight." That boundary maintenance is what makes the trust durable.',
      tip: 'Exam season in Indian colleges is often also family-pressure season — holding space for that, without fixing, is real trust. When someone shares something heavy at 1am, the next day should be normal — don\'t bring it up in public. Boundary maintenance makes trust durable.',
      dont: 'Don\'t joke about "shaadi talks" when she\'s confiding real anxiety about it. Don\'t minimise ("it\'s not that bad") or fix ("just tell your aunt no"). Don\'t bring up the 1am disclosure in the canteen the next day — it stays where it was shared.',
    },
    {
      num: 7,
      title: 'The First Date',
      timeframe: 'Week 15',
      story:
        'After exams, Ishaan suggests they go to a café near FC Road — Cafe Goodluck, the old Irani café that\'s been there since before independence. He names it a date: "I want to take you on a date. Not a group hang, not a canteen thing — a date. Saturday afternoon, Goodluck?" She says yes. She spends longer than she\'d admit picking what to wear — she usually wears kurtis to college, but she considers whether a kurti is too "college" for a date, and eventually picks a dress she bought for her cousin\'s engagement but never wore. He wears a shirt instead of his usual t-shirt. They both notice what the other changed into. They share a bun-maska and chai, and the conversation is different from the canteen — slower, more deliberate, no friends walking by, no lectures to get to.',
      his: 'I said "a date, just us." After weeks of "we should hang," saying the actual words felt risky but right. I picked Goodluck because it\'s a real place — not the canteen, not the library. Somewhere with history. And I wore a shirt, not my fest t-shirt. She noticed. I noticed she noticed.',
      her: 'He said "date." Not "let\'s grab something." I\'m not pretending I didn\'t spend an hour on this outfit. I wore the dress from my cousin\'s engagement. He wore a shirt. We both changed. We both noticed. That\'s a date.',
      messages: [
        { from: 'him', text: 'exams done. I want to take you on a date. not a group hang, not a canteen thing. a date. Saturday afternoon, Goodluck?', time: 'WhatsApp · Wednesday 8:00 PM' },
        { from: 'her', text: 'Goodluck. a date. yes. Saturday. 4pm?', time: '8:03 PM' },
        { from: 'him', text: '4pm. I\'ll get there early and get a table. the bun-maska is on me.', time: '8:04 PM' },
        { from: 'her', text: 'bun-maska is on you but the chai is on me. we\'re splitting this date financially 😄', time: '8:05 PM' },
      ],
      deepDive:
        'The first date on a campus has a specific challenge: everything so far has happened in shared, public spaces — the canteen, the library, the project group. A date needs to be somewhere different, somewhere that signals "this is not a college hang." Ishaan picks Cafe Goodluck — an Irani café in Pune that\'s been there since 1935. This is culturally smart: it\'s not a "fancy restaurant" (which would be too much for a first date), it\'s not the canteen (which would blur the line), it\'s a place with character and history that\'s still casual. The outfit detail is important. In Indian college culture, what you wear to class (kurtis for women, t-shirts for men) is different from what you wear on a date. Both of them changing signals that they\'re treating this as a different context, not an extension of college. They both notice — and noticing that the other person changed is itself a signal. The bun-maska and chai is perfect first-date food: cheap, shareable, and culturally specific. It\'s not a "dinner" (too formal), it\'s not "coffee" (too generic). It\'s a Pune thing, an Irani café thing, and it gives them something to share (the bun-maska) that\'s more intimate than ordering separate plates.',
      tip: 'After a long shared-context buildup, directness is a relief, not a shock — say what it is. Pick a place that\'s different from your shared campus spaces. What you wear signals the context shift — and both of you noticing is itself a signal.',
      dont: 'Don\'t invite your whole friend group and call it a date. Don\'t do the first date at the canteen — it blurs "date" and "normal college day." Don\'t overdress — a shirt instead of a t-shirt is enough.',
    },
    {
      num: 8,
      title: 'Defining the Relationship',
      timeframe: 'Week 17',
      story:
        'On a walk through the campus lawns one evening — the lawns behind the main building, where couples sit and everyone pretends not to notice — Ishaan asks if she wants to be in this together, just them. She says yes. But then they have the campus-specific conversation: their friend groups overlap heavily. Meera\'s best friend is Ishaan\'s fest co-volunteer\'s girlfriend. The economics and literature departments share a common building. If they go public, it\'ll be known within a day. They agree: tell close friends first, directly. Don\'t let it leak through gossip. And if it ends, don\'t make the friend group choose sides — they agree to that too, even at the beginning.',
      his: 'I asked. And then we talked about how to handle our overlapping friend groups — together, not me deciding. We agreed: tell close friends first, directly. Don\'t let it become gossip.',
      her: 'He asked the big question and the practical one. The "who do we tell first" conversation mattered as much as the "do you want to be together" one. On a campus, gossip is the air everyone breathes. Having a plan for it is maturity.',
      messages: [
        { from: 'him', text: 'walk at the back lawns? there\'s something I want to ask you.', time: 'WhatsApp · Friday 5:00 PM' },
        { from: 'her', text: 'okay. I think I know what.', time: '5:02 PM' },
        { from: 'her', text: 'so. if we\'re doing this — and I want to — who do we tell? Sneha\'s going to know in 10 seconds. then it\'s everywhere.', time: 'after the walk · 7:30 PM' },
        { from: 'him', text: 'we tell Sneha and Aditi first, directly. before anyone else. and if it ends, we don\'t make the group choose. we agreed on that, right?', time: '7:33 PM' },
        { from: 'her', text: 'agreed. we tell them Monday. together. and Ishaan — I\'m scared. but I\'m more scared of not doing this.', time: '7:35 PM' },
        { from: 'him', text: 'same. Monday. together.', time: '7:36 PM' },
      ],
      deepDive:
        'On a campus, defining the relationship also means defining how to handle the gossip ecosystem. Indian college campuses are small worlds — departments overlap, friend groups interlock, and the "who\'s dating whom" information travels at the speed of WhatsApp. Ishaan and Meera\'s approach — tell close friends first, directly, before gossip gets there — is the right one. It\'s the difference between controlling the narrative and letting the narrative control you. The "if it ends, we don\'t make the group choose" agreement is remarkable for two 21-year-olds. Most campus couples don\'t have this conversation because it feels like jinxing the relationship. But it\'s not pessimism — it\'s maturity. It says: "I\'m committed to this, but I\'m also committed to not destroying our social world if it ends." The back lawns are the classic Pune campus spot for this kind of conversation — it\'s where couples go, and everyone pretends not to notice. The location itself is a signal: this is a place where these conversations happen, and by choosing it, Ishaan is naming the moment. Meera\'s "I\'m scared but I\'m more scared of not doing this" is one of the most honest things anyone says in this entire process. It\'s not bravado, it\'s not performance — it\'s genuine fear acknowledged and overridden by a deeper desire. That\'s what real courage looks like in a relationship context.',
      tip: 'On a campus, defining the relationship also means agreeing on how to handle shared friend circles — decide together. Tell close friends directly before gossip gets there. The "if it ends, we don\'t make the group choose" conversation is maturity, not pessimism.',
      dont: 'Don\'t let your friends find out through someone else before you\'ve even defined it. Don\'t skip the "what if it ends" conversation because it feels like jinxing — it\'s maturity.',
    },
    {
      num: 9,
      title: 'Meeting Family & Long-Term',
      timeframe: 'Months 6–10',
      story:
        'Meera introduces Ishaan to her parents as "a friend from college" first, during a casual visit home to Pune. Her parents live in Kothrud. Ishaan comes over for dinner — her mother makes puran poli, which is what she makes when she wants to impress someone without showing that she\'s trying to impress someone. Her father asks about Ishaan\'s plans after graduation — "MBA? Civil services? What\'s the plan?" Ishaan says he\'s planning to work for a year first, then decide. Her father nods, unconvinced but not hostile. Meera doesn\'t stage a formal "meet the parents" — she lets it happen through repeated contact. Ishaan\'s family meets Meera at a college farewell event his parents attend. His mother brings modak. His father asks about her career plans. Both introductions are gradual, not dramatic.',
      his: 'My parents met her at the farewell, not at a staged dinner. It felt organic because it was. And her dad asked me about my career plan — the classic Indian dad question. I said I\'d work first, then decide. He nodded but I could tell he wanted a more specific answer.',
      her: 'I introduced him to my parents as a friend first, and let them figure out the rest over time. No dramatic reveal. My mom made puran poli — that\'s her "I\'m impressed but won\'t show it" dish. Papa asked about his career plan, which is Papa\'s version of "are you good enough for my daughter."',
      messages: [
        { from: 'her', text: 'come home for dinner Friday. mom\'s making puran poli. she says "for a friend." I think she knows but she\'s pretending she doesn\'t.', time: 'WhatsApp · 3 days before' },
        { from: 'him', text: 'should I be nervous?', time: 'same evening' },
        { from: 'her', text: 'papa\'s going to ask about your career plan. just be honest. he respects honesty more than ambition.', time: 'same evening' },
        { from: 'him', text: 'okay. honest. I can do honest. what should I bring?', time: 'same evening' },
        { from: 'her', text: 'just yourself. maybe some chitale bandhu bakarwadi. papa loves bakarwadi.', time: 'same evening' },
        { from: 'him', text: 'bakarwadi and honesty. I\'m ready.', time: 'same evening' },
      ],
      deepDive:
        'On-campus relationships often transition to family awareness gradually — there\'s no need to force a formal "introduction" moment. Meera\'s approach — "a friend from college" — is the classic Indian middle-ground: not lying, not declaring. Her parents aren\'t stupid; they know. But the fiction of "friend" gives everyone room to assess without pressure. The puran poli is a cultural signal: it\'s a Pune specialty, it\'s labour-intensive to make, and it\'s what Marathi mothers make when they want to show care without saying "I\'m evaluating your partner." The father\'s career question is the universal Indian father interrogation: "What\'s the plan?" It\'s not really about the plan — it\'s about whether the young man has thought about his future. Ishaan\'s honest answer ("work first, then decide") is better than a fake plan ("I\'m definitely doing an MBA next year") because Indian parents can smell a fake plan. The father\'s nod is not approval — it\'s "I\'ll wait and see." The bakarwadi from Chitale Bandhu is the perfect Pune gift: it\'s local, it\'s specific, it shows you know the city. Bringing it says "I\'m not just a random boy, I understand where I am." On Ishaan\'s side, the farewell event is the natural bridge — his parents are already on campus, the context is academic, and meeting Meera happens organically rather than as a staged event. Both introductions are woven into existing life, not manufactured as "the big meeting."',
      tip: 'On-campus relationships often transition to family awareness gradually — there\'s no need to force a formal "introduction" moment. "A friend from college" is the classic Indian middle-ground: not lying, not declaring. The father\'s career question is about whether you\'ve thought about your future, not the specific plan — be honest, not impressive.',
      dont: 'Don\'t stage a dramatic family introduction to prove the relationship is "serious." Don\'t fake a career plan to impress an Indian father — they can smell it. Don\'t bring an expensive gift — bring something local and specific (bakarwadi, not chocolates).',
    },
  ],
};
