import type { Scenario } from '../types';

export const cafeScenario: Scenario = {
  id: 'cafe',
  setting: 'The Café',
  city: 'Bengaluru',
  blurb: 'Two weekend regulars, a shared table, and a barista who accidentally becomes the icebreaker.',
  hisName: 'Arjun',
  herName: 'Sara',
  hisRole: 'Graphic designer, Saturday regular',
  herRole: 'Data analyst, Sunday regular who shifts to Saturday',
  chapters: [
    {
      num: 1,
      title: 'Notice',
      timeframe: 'Week 1',
      story:
        'Arjun has been coming to this Indiranagar café every Saturday morning for a year. He\'s a freelance graphic designer who works from home, and Saturdays are his "get out of the house" day — he brings a book, orders a flat white, and reads for two hours. This month, he notices a new face. A woman who\'s shifted her usual Sunday to Saturday — she always has a laptop, always orders a flat white, always takes the window seat. She\'s there when he arrives, still there when he leaves. He notices, and keeps reading his own book. They make eye contact once — a brief, mutual recognition that they\'re both regulars — and then go back to their own things. That\'s it. No stare, no approach, no "accidentally" sitting closer.',
      his: 'New person in the window seat. Same order as me. Don\'t stare. You\'re here to read, remember? You\'re a regular. She\'s a regular. Regulars coexist. That\'s the café social contract.',
      her: 'There\'s a guy in the corner who\'s here every week like me. We\'ve made eye contact once. That\'s enough data for now. He\'s reading, I\'m working. This is fine.',
      messages: [],
      deepDive:
        'Being a regular somewhere gives you natural visibility — you\'re part of the landscape. But visibility isn\'t an invitation. In a café, the social contract is clear: people are there for their own reasons (to read, to work, to be alone in public), and approaching someone who hasn\'t signalled openness is a violation of that contract. The mutual recognition — one brief eye contact — is the café\'s version of "notice." It says: "I see you, you see me, we\'re both here regularly." That\'s enough for week one. The Indiranagar café context matters: Indiranagar is Bengaluru\'s café district, full of freelancers, designers, and tech workers who treat cafés as their second office. The culture is "leave people alone unless they signal otherwise." Arjun respects this. He doesn\'t interpret shared regularity as shared interest. He doesn\'t start sitting closer. He doesn\'t ask the barista about her. He just lets the mutual recognition exist and goes back to his book. This patience is what makes the next phase possible — if he\'d pushed in week one, she would\'ve changed her Saturday routine, and the whole thing would\'ve ended before it started.',
      tip: 'Being a regular somewhere gives you natural visibility — but visibility isn\'t an invitation. Let mutual recognition build slowly. In a café, the social contract is: people are there for their own reasons. Respect it.',
      dont: 'Don\'t assume a shared routine means shared interest. Don\'t start sitting closer, staring longer, or asking the barista about her.',
    },
    {
      num: 2,
      title: 'Overthinking',
      timeframe: 'Week 2',
      story:
        'Arjun considers asking Ravi, the barista who knows them both as regulars, to "accidentally" give her his usual order — as if that would somehow start a conversation. He catches himself: that\'s not charming, that\'s strange, and it puts Ravi in an unfair position. Sara, meanwhile, has noticed that Arjun always has a different book each week. She wonders if he\'s actually reading them or just curating a "café intellectual" aesthetic. She doesn\'t approach to find out — she\'ll just observe. If he\'s real, the books will have dog-ears. If he\'s performing, they\'ll be pristine.',
      his: 'I almost asked the barista to send her my order. That\'s not charming, that\'s strange. And it puts Ravi in an unfair spot — he\'s a barista, not my wingman. Stop. Read your book.',
      her: 'New book every week. Either he\'s a fast reader or he\'s curating a vibe. I\'m not approaching to find out — I\'ll just observe. If the books have dog-ears, he\'s real. If they\'re pristine, he\'s performing.',
      messages: [],
      deepDive:
        'The overthinking phase in a café context has a specific trap: using the staff as proxies. Arjun considers asking Ravi the barista to "accidentally" give her his order — this is a common move in Indian café culture, where the barista or server is seen as a social facilitator. But it\'s unfair to the staff: it puts them in a position they didn\'t sign up for, and it makes the woman uncomfortable because now the barista is involved in something she didn\'t ask for. The test Arjun applies: "If your planned move would sound creepy when described out loud, it\'s creepy. Don\'t do it." Describing "I asked the barista to give her my coffee order so she\'d talk to me" out loud — yes, that sounds creepy. So don\'t. Sara\'s side of the overthinking is also sharp: she\'s assessing whether Arjun is genuine or performing. The dog-ear test is brilliant — people who actually read their books fold pages; people who carry books as props don\'t. She\'s not going to ask him; she\'s going to observe. This is the café\'s advantage: you can observe someone over weeks without ever interacting. The data is rich — what they order, how long they stay, whether they\'re on their phone or actually reading, how they treat the staff. All of that is visible if you\'re paying attention.',
      tip: 'If your planned move would sound creepy when described out loud, it\'s creepy. Don\'t do it. Don\'t use café staff as proxy wingmen — it puts them in an unfair position. You can observe someone over weeks without ever interacting — the data is rich if you\'re paying attention.',
      dont: 'Don\'t use the barista or staff as a proxy wingman — it puts them in an unfair spot. Don\'t perform "café intellectual" — if you carry books, actually read them.',
    },
    {
      num: 3,
      title: 'First Real Conversation',
      timeframe: 'Week 3',
      story:
        'The café is packed — a Saturday morning rush, every table taken. Ravi, the barista who knows them both as regulars, points at Arjun\'s table and tells Sara: "You can share his, he\'s harmless, I promise." They both laugh. She sits. He asks what she\'s working on — she\'s building a data visualisation for a client, something about Bengaluru traffic patterns. Ten minutes of real talk, then she opens her laptop and he goes back to his book. He doesn\'t linger. He doesn\'t stretch the conversation. He reads the signal: she\'s working, and the conversation was nice, but it\'s over. He goes back to his own thing.',
      his: 'Ravi did the work I\'d never have done myself. She sat down. I asked about her work, not about her. Ten minutes. Then she opened her laptop and I went back to reading. The signal was: she\'s working. Respect it.',
      her: 'The barista vouched for him, which is the only reason I sat. And he asked about my work, then left me alone when I opened my laptop. Not a monologue guy. He read the signal. Good.',
      messages: [],
      deepDive:
        'A trusted mutual — even a barista — lowering the barrier is a legitimate icebreaker in a café context. Ravi knows them both, he\'s watched them coexist for weeks, and his vouch ("he\'s harmless, I promise") does something Arjun couldn\'t do himself: it gives Sara a third-party safety signal. In Indian social contexts, a mutual vouch is powerful — it\'s the difference between "stranger asking to share my table" and "the barista who knows me says this guy is fine." But once the ice is broken, the same rules apply: ask about something specific (her work, not her), keep it short, and read the signal. When Sara opens her laptop, that\'s the signal: the conversation is over, she\'s working. Arjun reads it and goes back to his book. This is crucial — most men would try to extend the conversation, ask another question, linger. Going back to your own thing says: "I\'m comfortable with silence, I have my own life, and I respect that you have yours." It also sets up the next conversation: if she wants to talk again next Saturday, she knows he\'s not going to monopolise her time.',
      tip: 'A trusted mutual (even a barista) lowering the barrier is fine — but once the ice is broken, let the other person set the pace. Ask about something specific, keep it short, and read the signal when they go back to their own thing.',
      dont: 'Don\'t overstay a first shared-table conversation — read when she\'s ready to get back to her own thing. Don\'t turn a ten-minute chat into a monologue. Don\'t ask the barista to set it up for you — if it happens naturally, great.',
    },
    {
      num: 4,
      title: 'Building Rapport',
      timeframe: 'Weeks 4–7',
      story:
        'They start arriving around the same time on Saturdays. Short chats become the norm — he asks about the data viz she\'s building (Bengaluru traffic patterns, which means she\'s spent hours looking at commute data and has strong opinions about the metro). She asks about the book he\'s on. He brings her a bookmark from a trip to Jaipur — a small, hand-painted one from a shop near Hawa Mahal. No big deal made of it. He just puts it on the table next to her flat white and says, "Saw this, thought of your bookmarks." (He\'d noticed she uses actual bookmarks, not receipts or folded corners — a detail from week 3.) She picks it up, turns it over, and smiles. Not a "thank you so much" performance — just a real smile.',
      his: 'I brought her a bookmark, not a gift. Small, specific, no "I was thinking of you" speech attached. I noticed she uses real bookmarks — not receipts, not dog-ears. That\'s a detail. The bookmark is the action.',
      her: 'A bookmark from Jaipur. He remembered I use actual bookmarks, not receipts. That\'s... very specific attention. And he didn\'t make a speech about it. He just put it down and said "saw this, thought of your bookmarks." Understated. Real.',
      messages: [],
      deepDive:
        'The rapport phase in a café is built through accumulated small interactions — weekly chats that deepen gradually. The bookmark is the key gesture. It\'s small (not a gift), specific (he noticed she uses real bookmarks), and unannounced (no speech). This is the same principle as the office mushroom detail and the gym shoulder stretch: notice something specific, act on it, don\'t announce it. The Jaipur provenance adds a layer — it means he was traveling, saw something, and thought of her. That\'s the real signal: she was in his mind when he wasn\'t in the café. But he doesn\'t say "I was thinking of you in Jaipur." He says, "Saw this, thought of your bookmarks." The difference is everything: the first makes it about his feelings; the second makes it about her habits. The Bengaluru traffic data viz is also a rapport-builder — he asks about her work, which is specific and real, not "so what do you do for fun." In Indian café culture, asking about someone\'s work is normal, but asking about the specific project (traffic patterns, data viz) shows you\'ve been listening across multiple conversations. It\'s accumulated attention, not a single grand gesture.',
      tip: 'A small, specific, no-fuss object (a bookmark, a postcard) carries more real signal than a grand gesture. Notice something specific, act on it, don\'t announce it. Asking about the specific project (not "what do you do") shows accumulated attention.',
      dont: 'Don\'t show up with an expensive gift early on — it creates pressure, not warmth. Don\'t make a speech about a small gesture. Don\'t ask "so what do you do for fun" when you could ask about the specific thing she\'s working on.',
    },
    {
      num: 5,
      title: 'Exchanging Numbers & Texting',
      timeframe: 'Week 8',
      story:
        'Sara mentions she\'s going to Lisbon for a work trip and will miss Saturday. Arjun, without making it a thing, says: "If you find a good café in Lisbon, send me a photo." It\'s a low-pressure reason to text — not "text me when you land" (which is an obligation), but "send a photo if you find something" (which is an invitation with no cost to decline). She does — a photo of a tiny café in Alfama with a handwritten menu. From there, the texting is daily. It starts about cafés, then about bread (she\'s discovered Portuguese sourdough), then about everything and nothing. The café pretext dissolves in two days.',
      his: 'I gave her a low-pressure reason to text: send a café photo. She sent one. Now we\'re texting about bread, not cafés. The pretext dissolved in two days. I didn\'t say "text me when you land" — that\'s an obligation. "Send a photo if you find something" is an invitation she can decline.',
      her: 'I sent him one photo from Lisbon and now we have a 40-message thread about sourdough. The pretext dissolved in two days. He didn\'t demand "text me when you land" — he gave me a reason to text that I could\'ve ignored. I didn\'t ignore it.',
      messages: [
        { from: 'her', text: '[photo: tiny café in Alfama, Lisbon — handwritten menu on a chalkboard]', time: 'WhatsApp · from Lisbon · 4:30 PM IST' },
        { from: 'her', text: 'found your café. the menu is handwritten and the owner is 80 years old. i think this is your spirit place.', time: '4:31 PM' },
        { from: 'him', text: 'that\'s incredible. the 80-year-old owner alone. what did you order?', time: '4:38 PM' },
        { from: 'her', text: 'pastel de nata and a bica (espresso). but arjun — the bread. they have a sourdough that\'s been fermented for 48 hours. i\'m losing my mind.', time: '4:42 PM' },
        { from: 'him', text: '48-hour ferment?? okay i\'m jealous. i\'ve been trying to bake sourdough for 6 months and my starter keeps dying.', time: '4:45 PM' },
        { from: 'her', text: 'YOUR STARTER KEEPS DYING?? i\'ve been through 4 starters. i named them all. they\'re all dead. this is a bond.', time: '4:47 PM' },
        { from: 'him', text: 'we\'re bonding over dead sourdough starters. this is the most specific connection i\'ve had in months.', time: '4:49 PM' },
      ],
      deepDive:
        'A trip or break in routine is the most natural opening to move from in-person to texting in a café context. The key is the framing: "send a photo if you find something" vs "text me when you land." The first is an invitation with no cost to decline — she can ignore it and nothing changes. The second is an obligation — if she doesn\'t text, she\'s "rude," and if she does, she\'s "complying." The difference is power: an invitation gives her agency; an obligation takes it. Sara\'s photo from Lisbon is the signal that she\'s interested — she didn\'t just text "landed safe," she sent a photo of a café, which means she was thinking about him while traveling. The sourdough tangent is where the pretext dissolves: they\'re not talking about cafés anymore, they\'re talking about their dead sourdough starters. This is the moment the texting becomes personal. The "this is a bond" message from Sara is her naming it — she\'s acknowledging that this has crossed from "café acquaintance" to "real connection." The 48-hour ferment detail and the dead starter tangent are the kind of hyper-specific conversation that only happens when two people are genuinely interested in each other\'s inner lives, not just performing interest.',
      tip: 'A trip or break in routine is a natural opening to move from in-person to texting — give a low-stakes reason, then let it drift naturally. "Send a photo if you find something" (invitation) beats "text me when you land" (obligation). The difference is agency.',
      dont: 'Don\'t demand "text me when you land" — offer a reason, don\'t impose an obligation. Don\'t force the conversation to stay on the pretext — let it drift to the personal.',
    },
    {
      num: 6,
      title: 'The Talking Stage',
      timeframe: 'Weeks 9–14',
      story:
        'The Saturday café is a given, but now they also meet on weeknights — a walk, a different café, a quick dinner. Sara tells Arjun she moved to Bengaluru from Hyderabad after a long relationship ended badly — her ex was controlling, and it took her a year to leave. Arjun tells her he\'s been single by choice for two years after a relationship that taught him he doesn\'t know how to be alone. Both are honest about not rushing. They don\'t pretend to be further along than they are. The talking stage is slow, deliberate, and both are okay with that — because they\'ve both been through enough to know that rushing is how you end up back where you started.',
      his: 'She told me about the move, the breakup, the controlling ex. I told her I\'ve been deliberately single because I don\'t know how to be alone. Neither of us pretended to be further along than we are. That honesty is the foundation.',
      her: 'He said he\'s only recently ready. That\'s more honest than most people are. I told him I\'m not in a rush. He didn\'t push. We\'re both people who\'ve been through things, and we\'re not pretending we haven\'t.',
      messages: [
        { from: 'her', text: 'i moved to bangalore from hyderabad two years ago. after a relationship that... wasn\'t good. he was controlling. it took me a year to leave. i don\'t talk about it much.', time: 'WhatsApp · Tuesday 10:30 PM' },
        { from: 'him', text: 'thank you for telling me. i\'ve been single for two years by choice. after my last relationship i realised i don\'t know how to be alone. i\'m only now feeling like i\'m ready to try again.', time: '10:35 PM' },
        { from: 'her', text: 'so we\'re both recently ready. both a little bruised. both not in a rush.', time: '10:38 PM' },
        { from: 'him', text: 'that\'s exactly right. no rush. just... this. whatever this is.', time: '10:39 PM' },
        { from: 'her', text: 'whatever this is. i like that. no labels yet. just this.', time: '10:41 PM' },
      ],
      deepDive:
        'The talking stage between two people who\'ve been through previous relationships is different from the first-time-around version. There\'s a vocabulary for damage — "controlling," "not good," "I don\'t know how to be alone" — and a mutual recognition that both people are carrying history. The key dynamic here is naming readiness. Sara says she moved after a bad relationship; Arjun says he\'s been single by choice because he needed to learn to be alone. Both are saying: "I\'m not pretending I\'m starting from zero. I\'m starting from after." This is the Indian urban relationship reality in 2024 — people in their late twenties and early thirties are often carrying previous relationship history, and the old cultural script of "first love, marriage, forever" doesn\'t apply. The new script is: "I\'ve been hurt, you\'ve been hurt, let\'s be honest about it and go slowly." The "no labels yet, just this" agreement is mature — it\'s not avoidance of commitment, it\'s a mutual decision to let the relationship define itself rather than forcing it into a category. In Indian relationship culture, where there\'s often pressure to "define it" quickly (because of family timelines, societal expectations, the "what is this" question from friends), choosing to be undefined is itself a commitment — a commitment to honesty over performance.',
      tip: 'Naming your actual readiness — "I\'m recently out of something," "I\'ve been single by choice" — protects both people from misaligned expectations. "No labels yet, just this" is not avoidance — it\'s a mutual decision to let the relationship define itself. Honesty about your history is the foundation.',
      dont: 'Don\'t hide your real timeline to seem "chill." Don\'t rush to define it because of external pressure. Don\'t pretend you\'re starting from zero when you\'re starting from after.',
    },
    {
      num: 7,
      title: 'The First Date',
      timeframe: 'Week 15',
      story:
        'Arjun asks her to dinner — not at their café, deliberately somewhere new, a place in Koramangala. He says: "I\'d like to take you on a proper date. Not our Saturday — a different day, a different place." She says yes. They both dress differently than they do for "their" café — she wears something she wouldn\'t wear on a Saturday morning, he wears something that isn\'t his Saturday reading outfit. They both notice. The dinner is two hours. They talk about things they haven\'t talked about at the café — family, childhood, what they wanted to be before they became what they are. It\'s a different kind of conversation — not the weekly chat, but the "who are you really" kind.',
      his: 'Different place, not our café. And I said "proper date." I wanted it to feel distinct from our Saturdays. If I take her to our café, it\'s just another Saturday with a label. A new place says: this is different.',
      her: 'He picked a new place, not our spot. And he said "proper date." I wore something I\'d never wear to our café. He noticed. I noticed he noticed. The conversation was different — not the weekly chat, but the real one.',
      messages: [
        { from: 'him', text: 'I\'d like to take you on a proper date. not our Saturday — a different day, a different place. Friday, 8pm, that new place in Koramangala?', time: 'WhatsApp · Wednesday 7:00 PM' },
        { from: 'her', text: 'a proper date. a different place. yes. i\'ll wear something that\'s not my saturday outfit.', time: '7:03 PM' },
        { from: 'him', text: 'i\'ll wear something that\'s not my reading t-shirt. fair?', time: '7:04 PM' },
        { from: 'her', text: 'fair. friday. 8pm. i\'m looking forward to it.', time: '7:05 PM' },
      ],
      deepDive:
        'For a first date from a café connection, picking somewhere that isn\'t your routine spot is crucial. If Arjun takes Sara to their café, it\'s just another Saturday with a label — "date" becomes a word, not a reality. A new place signals: "this is a different context." It also protects the shared space — if the date goes badly, their café isn\'t contaminated. They can still go back to their Saturdays without the awkwardness of "this is where we had our first date and it was weird." The outfit change is the physical signal of the context shift. At the café, they\'re in their comfortable, casual, "this is my regular spot" clothes. On the date, they\'re dressed differently — and both noticing is itself an intimacy. It says: "I changed for you. You changed for me. We both know what this is." The conversation at the date is also different — at the café, they talk about books, work, the weekly stuff. On the date, they go deeper: family, childhood, what they wanted to be. The new location gives permission for a new level of conversation.',
      tip: 'For a first date, pick somewhere that isn\'t your routine spot — it signals "this is new" and protects your shared space. The outfit change is the physical signal of the context shift. A new location gives permission for a new level of conversation.',
      dont: 'Don\'t do the first date at the café you both regular — it blurs "date" and "normal Saturday." Don\'t have the same conversation you\'d have at the café — go deeper.',
    },
    {
      num: 8,
      title: 'Defining the Relationship',
      timeframe: 'Week 17',
      story:
        'After dinner, walking back, Arjun asks if she wants this to be just the two of them. She does. But then they have the café-specific conversation: what happens to "their" café? Do they go together now? Do they still go independently? They agree — together — that they\'ll keep "their" café as a place they both still go independently sometimes, not turn it into a couple-spot. They each value having their own corner there. The café is where they started; turning it into a couple-space would change the thing that made it special.',
      his: 'I asked. And we agreed to keep the café as partly-ours, not fully-couple. That boundary protects the thing that started us. If we turn it into a date spot, it stops being the place where we were two individuals who happened to share a table.',
      her: 'He asked the question and also the café one. Keeping our independent Saturdays at "our" place matters to me. He got it. The café is where we started as two separate people. It should stay that way.',
      messages: [
        { from: 'him', text: 'can i ask you something? do you want this to be just us? because i do.', time: 'WhatsApp · after the date · 11:30 PM' },
        { from: 'her', text: 'yes. just us. but arjun — what about the café? do we go together now? do we still go separately?', time: '11:33 PM' },
        { from: 'him', text: 'i think we keep it as it is. we go independently. sometimes we overlap, sometimes we don\'t. the café is where we were two people who happened to share a table. i don\'t want to lose that.', time: '11:36 PM' },
        { from: 'her', text: 'that\'s exactly what i was hoping you\'d say. the café stays the café. this is ours. that\'s ours. separate.', time: '11:38 PM' },
      ],
      deepDive:
        'Defining the relationship from a café connection has a unique element: the shared space. Like the gym scenario, the café is a chosen space — neither person has to be there. But unlike the gym (which is about personal training), the café is about solitude in public — being alone around other people. If they turn it into a couple-space, they lose the thing that brought them together: the experience of being two independent people who happened to share a table. Their agreement — keep the café as partly-independent — is mature and unusual. Most new couples want to merge everything. But some independence is what keeps the relationship alive. In Indian urban culture, where couples often struggle to find "neutral" public spaces (everything is either family space, work space, or explicitly romantic), a café where you can be alone-in-public is valuable. Protecting it is protecting the relationship\'s origin. The "this is ours, that\'s ours, separate" framing is clean: the relationship is one thing, the café is another. They don\'t have to be the same.',
      tip: 'Defining the relationship can also mean protecting the spaces that made you — you don\'t have to merge everything. The café is where you were two independent people. Keep it that way. Some independence is what keeps the relationship alive.',
      dont: 'Don\'t turn every shared space into couple-space. Don\'t assume the café is now a date spot — it\'s still the place where you go to be alone in public.',
    },
    {
      num: 9,
      title: 'Meeting Family & Long-Term',
      timeframe: 'Months 6–10',
      story:
        'Sara\'s parents visit Bengaluru from Hyderabad. She brings Arjun to brunch with them — casual, at a different café in Jayanagar, not their spot. Her father is a retired government officer, quiet and observant. Her mother is warm but asks pointed questions: "Where is your family from? What does your father do?" Arjun answers honestly — his family is from Coimbatore, his father ran a small printing press, now retired. His mother teaches Carnatic music. Sara\'s mother warms at the Carnatic music detail — she\'s a listener. A few months later, Arjun\'s mother visits from Chennai. Sara meets her at Arjun\'s flat one evening. His mother brings homemade filter coffee and a small silk potli. She asks Sara to sing (Sara can\'t sing, and says so, and his mother laughs). Neither meeting is a formal "bring them home" event; both are woven into ordinary city life.',
      his: 'My mom met Sara at my flat over filter coffee, not at a staged dinner. She brought a silk potli — that\'s her love language. She asked Sara to sing, Sara said she can\'t, and my mom laughed. It was ordinary, and that\'s why it worked.',
      her: 'I brought him to brunch with my parents at a normal café. No performance. My mom asked about his family, and when he said his mother teaches Carnatic music, she lit up. His mom brought me a silk potli and asked me to sing. I said I can\'t. She laughed. It felt like family.',
      messages: [
        { from: 'her', text: 'parents visiting this weekend. come for brunch. different café, not ours. mom wants to meet you. dad will be quiet and watchful — that\'s just him.', time: 'WhatsApp · 1 week before' },
        { from: 'him', text: 'different café, noted. anything i should know? what does your dad care about?', time: 'same evening' },
        { from: 'her', text: 'he cares about whether you\'re honest. don\'t oversell. he was a government officer — he\'s spent 35 years reading people.', time: 'same evening' },
        { from: 'him', text: 'honest. i can do that. should i bring something?', time: 'same evening' },
        { from: 'her', text: 'just yourself. maybe some mysore pak from your tamil side 😄 dad has a sweet tooth.', time: 'same evening' },
        { from: 'him', text: 'mysore pak and honesty. done.', time: 'same evening' },
      ],
      deepDive:
        'Family introductions woven into ordinary city life (a parent\'s visit, a casual brunch) feel less performative than staged "meet the parents" events. Sara\'s father being a retired government officer is culturally specific — Indian government officers are trained to read people, and his quiet observation is his vetting process. He doesn\'t ask many questions; he watches. Sara\'s advice to Arjun ("don\'t oversell, he\'s spent 35 years reading people") is spot-on — the worst thing you can do with a professional people-reader is perform. Arjun\'s honesty about his father\'s small printing press is the right move: it\'s not impressive, but it\'s real, and a government officer respects real over impressive. The Carnatic music detail is the bridge — Sara\'s mother is a listener (a rasika), and knowing that Arjun\'s mother teaches Carnatic music gives her a connection point that bypasses the interrogation. On Arjun\'s side, the filter coffee and silk potli are the Tamil mother\'s love language — acceptance through homemade things. The "sing" request and Sara\'s honest "I can\'t" is a perfect moment: it\'s the kind of small, unguarded exchange that happens in families, not in interviews. His mother laughing instead of being awkward is the acceptance signal. The Mysore pak from "your Tamil side" is Sara\'s way of acknowledging his culture while giving him a practical task — it\'s inclusive, not demanding.',
      tip: 'Family introductions woven into ordinary city life feel less performative than staged events. With a quiet, observant parent, honesty beats performance — they\'ve spent decades reading people. Find a cultural bridge (Carnatic music, a sweet tooth) that bypasses the interrogation. Acceptance often comes through small, unguarded exchanges, not formal moments.',
      dont: 'Don\'t wait for a "perfect occasion" to introduce someone — ordinary moments reveal more. Don\'t oversell with a professional people-reader. Don\'t stage a performative family meeting — let it be ordinary.',
    },
  ],
};
