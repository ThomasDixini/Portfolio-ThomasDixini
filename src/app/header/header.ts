import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';

const NAV_TEXT = {
  pt: { about: 'Sobre', stack: 'Stack', experience: 'Experiência', projects: 'Projetos', resume: 'Currículo' },
  en: { about: 'About', stack: 'Stack', experience: 'Experience', projects: 'Projects', resume: 'Resume' },
};

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private languageService = inject(LanguageService);

  public lang = this.languageService.lang;
  public t = computed(() => NAV_TEXT[this.lang()]);

  public toggleLang(): void {
    this.languageService.toggle();
  }

  baixarArquivo(){
    const link = document.createElement('a');
    link.href = 'docs/curriculo.pdf';
    link.download = 'curriculo.pdf';
    link.click();
  }
}
