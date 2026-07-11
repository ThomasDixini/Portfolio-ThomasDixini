import { Component, computed, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { LanguageService } from '../../services/language-service';

const TEXT = {
  pt: 'Todos os direitos reservados',
  en: 'All rights reserved',
};

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  private languageService = inject(LanguageService);

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  public copyright = computed(() => TEXT[this.languageService.lang()]);
}
