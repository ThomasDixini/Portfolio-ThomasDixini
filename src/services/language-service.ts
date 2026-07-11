import { Injectable, signal } from '@angular/core';

export type Lang = 'pt' | 'en';

const STORAGE_KEY = 'portfolio_lang';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public lang = signal<Lang>(this.readInitialLang());

  private readInitialLang(): Lang {
    if (typeof localStorage === 'undefined') return 'pt';
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'pt';
  }

  public toggle(): void {
    const next: Lang = this.lang() === 'pt' ? 'en' : 'pt';
    this.lang.set(next);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }
}
