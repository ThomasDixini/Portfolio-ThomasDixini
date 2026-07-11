import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';

const TEXT = {
  pt: {
    badge: 'Disponível para novos projetos',
    line1: 'Desenvolvedor',
    line2: 'Backend .NET / C#',
    desc: 'Desenvolvedor de software especializado em Backend, com foco em qualidade de código, performance e boas práticas de arquitetura no ecossistema .NET e C#.',
    ctaProjects: 'Ver projetos',
    ctaTalk: 'Vamos conversar',
    stat1Value: 'Desde 2020',
    stat1Label: 'Na área de desenvolvimento',
    stat2Value: '.NET / C#',
    stat2Label: 'Stack principal',
    stat3Value: 'VMS Informática',
    stat3Label: 'Atuação atual',
  },
  en: {
    badge: 'Available for new projects',
    line1: 'Developer',
    line2: 'Backend .NET / C#',
    desc: 'Backend-focused software developer, dedicated to code quality, performance and solid architecture practices within the .NET and C# ecosystem.',
    ctaProjects: 'View projects',
    ctaTalk: "Let's talk",
    stat1Value: 'Since 2020',
    stat1Label: 'Working in development',
    stat2Value: '.NET / C#',
    stat2Label: 'Main stack',
    stat3Value: 'VMS Informática',
    stat3Label: 'Current role',
  },
};

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  private languageService = inject(LanguageService);
  public t = computed(() => TEXT[this.languageService.lang()]);
}
