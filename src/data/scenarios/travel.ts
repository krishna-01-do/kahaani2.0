import type { Scenario } from '../types';

export const travelScenario: Scenario = {
  id: 'travel',
  setting: 'Travel / Train',
  city: 'Jaipur to Delhi (train)',
  blurb: 'A long train journey, a stranger, a number exchanged before parting — and the slow build of a long-distance-feeling talking stage.',
  hisName: 'Vikram',
  herName: 'Naina',
  hisRole: 'Returns to Delhi after a friend\'s Jaipur wedding',
  herRole: 'Goes to Delhi for a job interview, returns to Jaipur after',
  chapters: [
    {
      num: 1,
      title: 'Notice',
      timeframe: 'Hour 1',
      story:
        'Vikram boards the Jaipur-Delhi Shatabdi at 6am. He\'s coming back from a friend\'s wedding — two days of functions, too much food, not enough sleep. He finds his seat: B-12, window. Next to him, B-11, is a woman already settled in, reading a paperback. On her tray table: a folder of printed interview prep — company research, likely interview questions, a printed map to the interview venue. She\'s clearly going to Delhi for something important. Vikram sits down, stows his bag, and lets the train pull out. He doesn\'t open with anything. He reads the situation: she\'s prepping for an interview, she\'s focused, and the last thing she needs is a chatty stranger. He pulls out his own book — a Hindi novel, Manohar Shyam Joshi\'s "Tata" — and starts reading.',
      his: 'She\'s got interview prep printed out. Going to Delhi for something important. Don\'t be the chatty stranger who ruins her prep. Sit down, read your book, let the train be a train.',
      her: 'Guy next to me sat down quietly, didn\'t immediately start talking. That\'s already better than most train neighbours. I can focus on my prep without managing a conversation.',
      messages: [],
      deepDive:
        'On a train, noticing without immediately intruding is the baseline. Indian trains are unique social spaces — you\'re in close proximity to strangers for hours, but the social contract is: coexist first, interact if there\'s a natural opening. The Shatabdi specifically is a chair-car train, not a sleeper — it\'s daytime, it\'s shorter (4.5 hours), and the seats are more like a plane than a sleeper train. The proximity is tighter, but the duration is shorter. Vikram reads the situation correctly: Naina has interview prep on her tray table. She\'s not reading for pleasure; she\'s preparing for something that matters. Starting a conversation now would be intrusive, not friendly. The printed folder is also a cultural detail — in an age of laptops and tablets, printing your interview prep on paper is deliberate. It means she\'s the kind of person who takes things seriously enough to have a physical artifact. That tells Vikram something about her character before he\'s heard her voice. The Hindi novel is also a signal — reading Hindi literature on a train route where most people are on their phones or reading English is unusual. It\'s a small detail, but it\'s the kind of detail that matters later.',
      tip: 'On a train, noticing without immediately intruding is the baseline — let the other person\'s context (prep, book, headphones) set the pace. Reading the situation before acting is the most important skill in a confined space.',
      dont: 'Don\'t open with a question the moment you sit down — read the situation first. Don\'t be the chatty stranger who ruins someone\'s prep, sleep, or reading.',
    },
    {
      num: 2,
      title: 'Overthinking',
      timeframe: 'Hour 2',
      story:
        'The catering attendant brings chai. Vikram has an extra chai packet — the kind you get on the Shatabdi, a small Tata Tea bag with a paper cup. He considers offering it to Naina, then wonders if that\'s weird. It\'s a chai packet, not a ring. But he\'s aware that on a train, any gesture can be read as "this guy is trying to talk to me." He decides: offer it normally, without attaching weight. If she says no, fine. If she says yes, also fine. It\'s chai. Naina, meanwhile, has noticed he\'s reading a Hindi novel — "Tata" by Manohar Shyam Joshi — and is curious. She studied Hindi literature in college before switching to management. She wants to ask about the book but he\'s clearly absorbed, and she doesn\'t want to interrupt. She\'ll wait for a natural pause.',
      his: 'Do I offer the extra chai? Is that friendly or strange? It\'s a chai packet, not a ring. Just offer it normally. "Extra chai if you want it." No speech. If she says no, fine.',
      her: 'He\'s reading a Hindi novel. Tata — by Manohar Shyam Joshi. I studied Hindi lit in college. I want to ask what he thinks of it but he\'s clearly absorbed. I\'ll wait for a natural pause — a station stop, the chai guy, something.',
      messages: [],
      deepDive:
        'A small, no-big-deal offer (extra chai, a tissue packet) is fine on a train — the key is offering it without attaching weight. The train is a confined space, and in that confinement, any gesture can be magnified. A chai packet offered with a speech ("I noticed you\'re prepping for an interview, would you like some chai?") is weird. A chai packet offered with "extra chai if you want it" is normal. The difference is the weight attached. In Indian train culture, sharing food and chai is the default social lubricant — it\'s how strangers coexist. The extra chai is not a grand gesture; it\'s train etiquette. Vikram\'s awareness that any gesture can be read as "he\'s trying to talk to me" is correct — on a train, women are often approached by men who use small gestures as pretexts. The way to distinguish a genuine gesture from a pretext is the weight: genuine gestures are light, pretexts are heavy. Naina\'s curiosity about the Hindi novel is the other side of the overthinking. She\'s interested but she\'s waiting for a natural opening — a station stop, a pause in his reading, the chai moment. She\'s not going to interrupt him, because interrupting someone reading is the train equivalent of walking into someone\'s house uninvited.',
      tip: 'A small, no-big-deal offer (extra chai, a tissue packet) is fine — the key is offering it without attaching weight. Genuine gestures are light; pretexts are heavy. On a train, wait for a natural opening before starting a conversation — don\'t interrupt someone reading.',
      dont: 'Don\'t make a grand gesture out of a chai packet. Don\'t interrupt someone reading to start a conversation. Don\'t attach a speech to a small offer.',
    },
    {
      num: 3,
      title: 'First Real Conversation',
      timeframe: 'Hour 3',
      story:
        'The train halts at Alwar station. Naina stretches, glances at Vikram\'s book, and asks: "Tata? That\'s a heavy book. How is it?" It turns into a twenty-minute conversation — about Hindi literature, about Manohar Shyam Joshi\'s writing, about why she switched from Hindi literature to management ("because literature didn\'t pay the rent"), about why he\'s reading it ("because it\'s one of the few Hindi novels that actually grapples with modernity without being pretentious"). Then they talk about why she\'s going to Delhi (the interview — a brand manager role at an FMCG company), and about the wedding he\'s coming back from. Then they both go quiet again — and that\'s okay. The silence after a good train conversation is not awkward; it\'s comfortable.',
      his: 'She asked about the book. We talked for twenty minutes, then she went back to her prep and I went back to reading. The silence after was fine. That\'s the test — can you share silence? We could.',
      her: 'We talked, then we both went quiet, and it wasn\'t awkward. That\'s the test — can you share silence? We could. Most people fill every gap with noise. He didn\'t.',
      messages: [],
      deepDive:
        'A good first conversation on a train ends with both people returning to their own thing, comfortably — that\'s a better signal than nonstop talking. The silence test is the train\'s unique contribution to relationship assessment: after you\'ve talked, can you sit in silence without it being awkward? If yes, there\'s something real. If the silence is painful and one person keeps filling it, the connection is performative, not genuine. The conversation itself is rich — they talk about literature, career switches, the wedding, the interview. These are not small-talk topics; they\'re personal and real. Naina\'s disclosure about switching from Hindi literature to management "because literature didn\'t pay the rent" is a real thing — it\'s the Indian middle-class reality of following your passion until the rent is due, then making a practical choice. Vikram\'s response — he doesn\'t judge or sympathise; he engages with the choice on its merits — shows he\'s not the kind of person who thinks pursuing money makes you less of a person, or that pursuing literature makes you more of one. The Alwar station stop is the natural opening Naina was waiting for. The train stopping is a universal permission signal — it\'s a break in the journey, a stretch, a moment where conversation is socially acceptable. She uses it well.',
      tip: 'A good first conversation on a train ends with both people returning to their own thing, comfortably — that\'s a better signal than nonstop talking. The silence test: after you\'ve talked, can you sit in silence without it being awkward? If yes, there\'s something real.',
      dont: 'Don\'t fill every silence — silence on a train is normal and comfortable. Don\'t keep the conversation going after the natural endpoint — let both people return to their own thing.',
    },
    {
      num: 4,
      title: 'Building Rapport',
      timeframe: 'Hour 4–5',
      story:
        'They share the window view as the train passes through the Aravallis — the dry, rocky landscape that marks the transition from Rajasthan into Haryana. Vikram shares a samosa his friend\'s mother packed for his journey — homemade, still warm, wrapped in foil. Naina shares the homemade laddoo her mother gave her for the trip — "for energy," her mother said, which is what Indian mothers say when they want to show love through food. They trade snacks and stories. He tells her about the wedding — the baraat, the dancing, the uncle who had too much and tried to give a speech. She tells him about her interview prep — the brand she\'s applying to, the case study she\'s been practising. Small, ordinary exchanges — nothing forced, nothing performed.',
      his: 'I shared the samosa my friend\'s mom packed. She shared her mom\'s laddoo. It was just train food. No speech attached. We\'re two people sharing snacks on a train — that\'s the most ordinary, most real exchange there is.',
      her: 'We traded mom-packed snacks. That\'s the most ordinary, most real exchange I\'ve had with a stranger on a train. No pretence. Just food and stories. My mom\'s laddoo and his friend\'s mom\'s samosa.',
      messages: [],
      deepDive:
        'Sharing ordinary things (food from home, a view) builds more genuine rapport than any performed conversation topic. In Indian train culture, sharing food is the default trust-builder. The homemade samosa and laddoo are culturally specific — these aren\'t café-bought snacks; they\'re mom-packed, which means they carry the warmth of someone\'s kitchen. When Vikram shares his friend\'s mother\'s samosa, he\'s sharing a piece of someone\'s care for him. When Naina shares her mother\'s laddoo, she\'s sharing the same. This is a level of intimacy that\'s hard to achieve in conversation — you can\'t "talk" someone into trusting you, but you can share food and let the food do the work. The Aravalli view is the other rapport-builder — shared beauty, experienced together, creates a bond that\'s different from shared conversation. It\'s the train\'s advantage: you\'re literally moving through the world together, watching the landscape change, and that shared movement creates a kind of connection that static settings (cafés, offices) can\'t replicate. The stories they share are also real — not performed. The drunk uncle at the wedding, the case study she\'s been practising. These are the actual contents of their lives, not curated highlights.',
      tip: 'Sharing ordinary things (food from home, a view) builds more genuine rapport than any performed conversation topic. In Indian train culture, sharing mom-packed food is the default trust-builder — you can\'t talk someone into trusting you, but you can share food and let it do the work. Shared beauty (a landscape) creates a bond that static settings can\'t replicate.',
      dont: 'Don\'t use the confined space to extract her life story — let the conversation meander. Don\'t perform stories — share the actual contents of your life, not curated highlights.',
    },
    {
      num: 5,
      title: 'Exchanging Numbers & Texting',
      timeframe: 'Hour 6 (arrival)',
      story:
        'As the train pulls into New Delhi station, Vikram says he\'d like to know how her interview goes. He offers his number — not asking for hers. He writes it on the back of a business card and hands it to her: "Text me if you want. No pressure." She takes it. That evening, she texts: "Interview done. Went okay, I think. Two case studies and a brand launch simulation." From there, the texting is daily — but she\'s going back to Jaipur in two days, so it starts long-distance immediately. Both of them know this. Neither pretends the logistics don\'t exist.',
      his: 'I gave her my number, not "give me yours." She texted when she was ready — that evening, after the interview. And I knew she\'s going back to Jaipur in two days. This starts as distance. No pretending it\'s easy.',
      her: 'He gave his number, didn\'t demand mine. I texted when I wanted to — after the interview, when I had something real to say. And we both know I\'m leaving in two days. No pretending this is easy.',
      messages: [
        { from: 'her', text: 'hi, it\'s Naina. from the train. interview done — went okay, i think. two case studies and a brand launch simulation. my brain is fried.', time: 'WhatsApp · 7:30 PM' },
        { from: 'him', text: 'Naina! glad you texted. two case studies AND a brand launch simulation? they\'re not playing around. how do you feel about it?', time: '7:35 PM' },
        { from: 'her', text: 'i think i did okay. the first case study was about a tea brand entering a new state. i actually had fun with that one. the second one was about distribution — harder. i\'ll know in a week.', time: '7:40 PM' },
        { from: 'him', text: 'a tea brand entering a new state? that\'s a great case. which state?', time: '7:42 PM' },
        { from: 'her', text: 'i can\'t tell you that 😄 but it was a southern state and the challenge was cultural. i\'ll tell you more when i\'m allowed to.', time: '7:45 PM' },
        { from: 'him', text: 'fair. good luck with the wait. and naina — you\'re going back to jaipur day after, right?', time: '7:48 PM' },
        { from: 'her', text: 'yes. back to jaipur. this starts as distance. i\'m not going to pretend that\'s easy.', time: '7:50 PM' },
        { from: 'him', text: 'neither am i. but i\'d rather have this as distance than not have it at all.', time: '7:52 PM' },
      ],
      deepDive:
        'Giving your number (not demanding theirs) is especially important with a stranger you\'ll likely not see again. On a train, you\'re together for hours and then you\'re not — there\'s no shared office, no shared gym, no shared café. The number is the only thread, and who holds it matters. By giving his number, Vikram puts the next move in Naina\'s hands. She decides whether to text, when to text, and what to say. This is crucial because she\'s a woman who just met a man on a train — giving her control over the next contact is a safety and respect signal. Naina\'s first text is perfect — it\'s not "hi" or "it\'s me." It\'s substantive: interview done, two case studies, brain fried. She\'s giving him real information, not a placeholder. The "this starts as distance" exchange is the most important moment in this phase. Both of them name the reality: she\'s going back to Jaipur, he\'s in Delhi, and this is going to be long-distance from day one. Neither pretends it\'s easy. Neither says "we\'ll figure it out." They just acknowledge it. This honesty is what makes the distance survivable later — if you start with false optimism, the distance breaks you. If you start with honest acknowledgment, you can plan around it.',
      tip: 'Giving your number (not demanding theirs) is especially important with a stranger you\'ll likely not see again — let her decide to close the distance. The first text should be substantive, not a placeholder. Name the distance honestly from day one — false optimism breaks you, honest acknowledgment lets you plan.',
      dont: 'Don\'t ask for her number and then text immediately to "make sure it\'s real" — give yours and wait. Don\'t pretend the distance is easy. Don\'t start with "hi" — give the first text real content.',
    },
    {
      num: 6,
      title: 'The Talking Stage',
      timeframe: 'Weeks 2–8',
      story:
        'Naina is back in Jaipur, Vikram is in Delhi. The talking stage is almost entirely on the phone — long evening calls, voice notes, photos of their days. She sends him a photo of the Hawa Mahal at sunset from her rooftop. He sends her a photo of the India Gate from his evening walk. They\'re honest that the distance is hard. She tells him she\'s not sure she wants to leave Jaipur — her mother is there, her life is there, and the Delhi job would mean uprooting everything. He tells her he can\'t move to Jaipur — his work, his life, his father\'s medical care are all in Delhi. Neither pretends the logistics will magically solve themselves. They have the hard conversation early, not late.',
      his: 'We\'re in different cities and we both said so. I can\'t move — Papa\'s treatment is in Delhi. She\'s not sure she wants to leave Jaipur — her mom is there. We didn\'t pretend the distance was nothing. We named it.',
      her: 'We named the hard thing out loud: different cities, no easy merge. I\'m not sure I want to leave Jaipur. He can\'t leave Delhi. Most people would\'ve dodged it and built a fantasy. We didn\'t.',
      messages: [
        { from: 'her', text: 'can i be honest about something? i\'m not sure i want to leave jaipur. my mom is here. my whole life is here. the delhi job would mean leaving everything.', time: 'WhatsApp call · Week 3 · evening' },
        { from: 'him', text: 'i appreciate you saying that. and i need to be honest too — i can\'t move to jaipur. papa\'s treatment is in delhi, my work is here. i can\'t pretend otherwise.', time: 'same call' },
        { from: 'her', text: 'so we\'re two people who like each other and live in different cities and neither can move. what do we do with that?', time: 'same call' },
        { from: 'him', text: 'we don\'t pretend it\'s easy. we don\'t build a fantasy. we see each other when we can. we revisit it honestly. and if it gets too hard, we say so — before it becomes resentment.', time: 'same call' },
        { from: 'her', text: '"before it becomes resentment." that\'s... very mature. and very scary. but yes. that\'s the only way this works.', time: 'same call' },
      ],
      deepDive:
        'In a distance-starting talking stage, naming the logistics problem honestly — early — is what keeps it from collapsing later under false hope. The Indian context here is specific: Naina\'s mother is in Jaipur, and leaving her is not just a career decision but a family one. In Indian families, especially where one parent is alone (Naina\'s father isn\'t mentioned — possibly deceased, possibly separated), the adult child\'s move to another city is a family event, not just a personal one. Vikram\'s constraint is equally real: his father\'s medical treatment is in Delhi, and moving would mean disrupting his father\'s care. These are not abstract logistics; they\'re the concrete realities of Indian middle-class life — aging parents, medical infrastructure, family obligations. The "before it becomes resentment" line is the key insight. Most long-distance relationships don\'t die because of the distance; they die because the distance turns into resentment — one person feels they\'re sacrificing more, the other feels they\'re not being understood. By naming the risk of resentment early, Vikram is saying: "I\'m aware this could break us, and I\'d rather we talk about it before it does." This is the hardest conversation in a long-distance relationship, and they\'re having it in week 3, not month 6. Early hard conversations prevent late hard breakups.',
      tip: 'In a distance-starting talking stage, naming the logistics problem honestly — early — is what keeps it from collapsing later under false hope. In Indian context, moving cities is a family decision, not just a personal one. "Before it becomes resentment" — most long-distance relationships die from resentment, not distance. Early hard conversations prevent late hard breakups.',
      dont: 'Don\'t build a fantasy of "we\'ll figure it out later" without actually discussing the figure-it-out part. Don\'t wait until month 6 to have the logistics conversation — have it in week 3. Don\'t let distance turn into resentment before naming it.',
    },
    {
      num: 7,
      title: 'The First Date',
      timeframe: 'Week 10',
      story:
        'Naina comes to Delhi for a follow-up interview round. Vikram suggests they meet — he names it a date, picks a place near her interview venue in Gurgaon so she doesn\'t have to travel across the city, and keeps it low-pressure. "Café near your office. After your interview. A date. I\'ll be there." She says yes. It\'s their first time seeing each other since the train. She walks in in interview formals; he\'s in a casual shirt. They both laugh at the asymmetry. She changes out of her blazer, they order coffee, and for the first time, they\'re not on a train and not on a phone — they\'re just two people at a table.',
      his: 'She\'s in Delhi for a day. I picked a café near her interview venue, not across the city. And I said "date." Make it easy for her. She walked in in interview formals and I was in a t-shirt. We laughed. That\'s the best start.',
      her: 'He picked a place near my interview, not some fancy spot an hour away. And he said "date." He designed the whole thing around my day. I walked in in a blazer and he was in a casual shirt. We laughed about it. That\'s the most real first-date moment I\'ve had.',
      messages: [
        { from: 'him', text: 'you\'re in delhi for the interview! can i see you? properly, not just phone. café near your office in gurgaon, after your interview. a date. i\'ll be there.', time: 'WhatsApp · 3 days before' },
        { from: 'her', text: 'a date. near my interview. you\'re making this easy for me.', time: 'same evening' },
        { from: 'him', text: 'that\'s the idea. you\'ll have enough stress from the interview. the date shouldn\'t add to it.', time: 'same evening' },
        { from: 'her', text: 'okay. yes. after the interview. i\'ll come in my interview formals though, no time to change.', time: 'same evening' },
        { from: 'him', text: 'i\'ll be in a t-shirt. we\'ll look like we\'re from different planets. it\'ll be perfect.', time: 'same evening' },
      ],
      deepDive:
        'When someone is travelling for a reason (interview, work), build the date around their day and location — don\'t add travel burden on top. Vikram picks a café near her interview venue in Gurgaon, not a "proper" date spot in South Delhi that would require her to cross the city after an already exhausting interview day. This is the same principle as the club scenario\'s daytime coffee: design the first date around her comfort, not your preference. The "I\'ll be there" is important — it\'s not "let\'s meet at X," it\'s "I\'ll be there." He\'s taking the uncertainty out of it. She doesn\'t have to wonder if he\'ll show up or where exactly to go. The outfit asymmetry — her in interview formals, him in a t-shirt — is the perfect icebreaker. It\'s real, it\'s funny, and it immediately removes any "first date" stiffness. They\'re not trying to impress each other; they\'re laughing at the absurdity of the situation. This is the train\'s gift: they\'ve already had their real first conversation (on the train), so this "first date" is actually the second meeting. The pressure is lower because they already know each other\'s voices, stories, and silences. The date is just the physical version of what they\'ve been building on the phone for weeks.',
      tip: 'When someone is travelling for a reason, build the date around their day and location — don\'t add travel burden. "I\'ll be there" removes uncertainty. The outfit asymmetry (interview formals vs. t-shirt) is the perfect icebreaker — it\'s real and funny. When you\'ve already had your real first conversation (on the train), the "first date" is actually the second meeting — the pressure is lower.',
      dont: 'Don\'t insist on a "proper" date spot that requires her to cross a city she barely knows after an exhausting interview. Don\'t try to make the first date formal — let the outfit asymmetry be the icebreaker.',
    },
    {
      num: 8,
      title: 'Defining the Relationship',
      timeframe: 'Week 12',
      story:
        'On a call, Vikram asks if she wants this to be just the two of them. She does. But then they have the hard conversation — together — about what the distance means. They agree on specifics: monthly visits (alternating who travels), a six-month check-in on the city question (does she move to Delhi? does he find a way to Jaipur?), and a commitment to not let the relationship exist only on the phone indefinitely. They\'re not just defining the relationship — they\'re defining the distance plan.',
      his: 'I asked. And then we had the actual hard conversation: monthly visits, a six-month check-in on the city question, no open-ended phone-only limbo. A relationship that exists only on the phone isn\'t a relationship — it\'s a podcast.',
      her: 'He asked, and then he wanted to plan the distance, not just endure it. A six-month checkpoint. Monthly visits. That\'s how adults handle this. Not "we\'ll figure it out" — actual specifics.',
      messages: [
        { from: 'him', text: 'can i ask you something? do you want this to be just us?', time: 'WhatsApp call · Week 12 · evening' },
        { from: 'her', text: 'yes. just us. but vikram — what does "just us" mean when we\'re in different cities?', time: 'same call' },
        { from: 'him', text: 'it means: monthly visits, alternating who travels. a six-month check-in on the city question — do you move, do i find a way. and no open-ended phone-only limbo. if we\'re doing this, we\'re doing it with a plan.', time: 'same call' },
        { from: 'her', text: 'monthly visits. six-month check-in. no limbo. i can agree to that. and if the check-in says it\'s not working?', time: 'same call' },
        { from: 'him', text: 'then we say so honestly. before it becomes resentment. same rule as before.', time: 'same call' },
        { from: 'her', text: 'same rule as before. okay. yes. just us. with a plan.', time: 'same call' },
      ],
      deepDive:
        'For a distance relationship, defining it also means defining the distance plan — visit cadence, a revisit date, and a real conversation about cities. The specifics matter: "monthly visits, alternating" is a plan; "we\'ll see each other when we can" is a hope. The six-month check-in is the crucial innovation — it\'s a built-in checkpoint where both people agree to honestly reassess. This prevents the two most common distance-relationship failure modes: (1) open-ended limbo, where the relationship exists only on the phone forever and gradually loses reality, and (2) silent resentment, where one person feels they\'re sacrificing more but never says so until it explodes. The six-month check-in says: "We\'re committed enough to plan, but honest enough to reassess." Vikram\'s "a relationship that exists only on the phone isn\'t a relationship — it\'s a podcast" is funny but true. The phone is a bridge, not a destination. The relationship needs physical reality to stay grounded. In Indian context, where long-distance relationships are common (jobs in different cities, families in hometowns, marriages arranged across states), this kind of explicit planning is rare but essential. Most Indian LDRs operate on "we\'ll figure it out" and then figure it out too late, after resentment has set in. Planning early is the antidote.',
      tip: 'For a distance relationship, defining it also means defining the distance plan — visit cadence, a revisit date, and a real conversation about cities. "Monthly visits, alternating" is a plan; "we\'ll see each other when we can" is a hope. A built-in checkpoint (six-month check-in) prevents open-ended limbo and silent resentment.',
      dont: 'Don\'t define the relationship without also defining how you\'ll actually see each other. Don\'t operate on "we\'ll figure it out" — figure it out now. Don\'t let the relationship exist only on the phone indefinitely — the phone is a bridge, not a destination.',
    },
    {
      num: 9,
      title: 'Meeting Family & Long-Term',
      timeframe: 'Months 6–12',
      story:
        'At the six-month mark, Naina gets the Delhi job — she\'s moving. The decision wasn\'t just about Vikram; it was the right career move, and Vikram was clear about that: "Don\'t move for me. Move because it\'s right for you. If it\'s right for you, I\'m here. If it\'s right for me, that\'s a bonus, not the reason." Before the move, Vikram goes to Jaipur to meet her mother properly. He brings peda from Delhi\'s oldest sweet shop. Her mother is quiet, watches how he is with Naina, and at the end of the visit says: "You\'ll take care of her." It\'s not a question. A few months after Naina relocates, she meets Vikram\'s father in Delhi. His father is recovering but stable. He asks Naina about her work, her mother, her plans. He\'s not assessing her as a daughter-in-law; he\'s getting to know a person. The move and the family meetings happen close together, and both feel like natural steps, not forced milestones.',
      his: 'I met her mother in Jaipur right as she was moving. It wasn\'t a separate "event" — it was part of the transition. I brought peda from the oldest sweet shop in Delhi. Her mother said "you\'ll take care of her." Not a question — a statement. That\'s trust.',
      her: 'I moved to Delhi, and meeting his dad was just part of settling into the city. The relationship and the life move together, not in separate tracks. And Vikram told me not to move for him — to move because it\'s right for me. That\'s the most selfless thing anyone\'s said to me.',
      messages: [
        { from: 'him', text: 'i\'m coming to jaipur next weekend. i\'d like to meet your mother. before you move. if that\'s okay with both of you.', time: 'WhatsApp · 2 weeks before the move' },
        { from: 'her', text: 'she said yes. she\'s making gatte ki sabzi. that\'s her "i approve but won\'t show it" dish. bring something sweet.', time: 'same evening' },
        { from: 'him', text: 'peda from Chaina Ram in Chandni Chowk. oldest sweet shop in delhi. is that too much?', time: 'same evening' },
        { from: 'her', text: 'it\'s perfect. she\'ll love it. and vikram — thank you for telling me not to move for you. for telling me to move because it\'s right for me. that\'s... everything.', time: 'same evening' },
        { from: 'him', text: 'if you move for me and it doesn\'t work, you\'ll resent me. if you move for you and it works, we both win. it\'s not selfless — it\'s just smart.', time: 'same evening' },
        { from: 'her', text: 'it\'s both. and i love you for it.', time: 'same evening' },
      ],
      deepDive:
        'When a move or major life change coincides with the relationship, family introductions can happen as part of that transition — not as a separate staged event. The move is the key event: Naina is relocating from Jaipur to Delhi for a job. Vikram\'s "don\'t move for me" is the most important line in this entire scenario. It says: "I want you to choose this for yourself, not for me. If you move for me and it doesn\'t work, you\'ll resent me. If you move for you and we work, we both win." This is the opposite of the possessive, "move for me" dynamic that destroys many relationships. It\'s not selfless — it\'s smart. It protects both people. The Chaina Ram peda from Chandni Chowk is culturally specific — it\'s Delhi\'s oldest sweet shop, in the old city, and bringing it to Jaipur is a gesture that says: "I\'m bringing a piece of my city to yours." Her mother\'s "you\'ll take care of her" is not a question — it\'s a statement of trust. In Indian family culture, this is the closest thing to a blessing. It\'s not "do you promise to take care of her?" (which is a contract); it\'s "you\'ll take care of her" (which is a recognition of character already demonstrated). The gatte ki sabzi is another "approval dish" — like the puran poli in the college scenario and the rajma chawal in the club scenario, Indian mothers have specific dishes that signal acceptance without saying it. The "I love you" from Naina is the first time those words appear in this scenario. It comes not in a grand romantic moment, but in a text about moving cities and sweet shops. That\'s the real version — love shows up in logistics, not just in poetry.',
      tip: 'When a move coincides with the relationship, family introductions can happen as part of that transition — not as a separate staged event. "Don\'t move for me — move because it\'s right for you" is the most important thing you can say. It protects both people. Love shows up in logistics, not just in poetry.',
      dont: 'Don\'t treat the family meeting as disconnected from the real life logistics — let them happen together. Don\'t ask someone to move for you — let them move for themselves. Don\'t wait for a grand romantic moment to say "I love you" — say it in the logistics.',
    },
  ],
};
