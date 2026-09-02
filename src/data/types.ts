export interface ChatMessage {
  from: 'him' | 'her';
  text: string;
  time?: string;
}

export interface Chapter {
  num: number;
  title: string;
  timeframe: string;
  story: string;
  his: string;
  her: string;
  messages: ChatMessage[];
  deepDive: string;
  tip: string;
  dont: string;
}

export interface Scenario {
  id: string;
  setting: string;
  city: string;
  blurb: string;
  hisName: string;
  herName: string;
  hisRole: string;
  herRole: string;
  chapters: Chapter[];
}

export interface GuideTopic {
  id: string;
  eyebrow: string;
  title: string;
  teaser: string;
  body: { heading: string; text: string }[];
}
