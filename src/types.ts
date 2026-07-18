export type ActiveTab = 'home' | 'revenue-os' | 'pricing' | 'book-demo' | 'thank-you' | 'privacy' | 'terms';

export interface LeakageItem {
  id: string;
  title: string;
  description: string;
}

export interface EngineService {
  id: number;
  title: string;
  purpose: string;
  includes: string[];
  outcome?: string;
}
