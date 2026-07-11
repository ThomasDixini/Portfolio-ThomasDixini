import { Component, computed, inject } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Stack } from '../stack/stack';
import { Experience } from '../experience/experience';
import { Contact } from '../contact/contact';
import { ProjectService } from '../../services/project-service';
import { LanguageService } from '../../services/language-service';
import { projectTranslationsEn } from '../../services/project-translations';

const SECTION_TEXT = {
  pt: { kicker: '// trabalhos selecionados', title: 'Projetos em destaque' },
  en: { kicker: '// selected work', title: 'Featured projects' },
};

@Component({
  selector: 'app-home',
  imports: [Hero, About, Stack, Experience, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private projectService = inject(ProjectService);
  private languageService = inject(LanguageService);

  public lang = this.languageService.lang;
  public t = computed(() => SECTION_TEXT[this.lang()]);

  public projects = computed(() => {
    const raw = this.projectService.getProjects();
    if (this.lang() === 'pt') return raw;
    return raw.map(p => {
      const translation = projectTranslationsEn[p.id];
      return translation ? { ...p, resume: translation.resume, type: translation.type, alt: translation.alt } : p;
    });
  });
}
