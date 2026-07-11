import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';

const TEXT = {
  pt: {
    kicker: '// quem sou eu',
    title: 'Backend em primeiro lugar, sempre com clareza.',
    p1: 'Sou desenvolvedor de software especializado em Backend, com foco em qualidade de código, performance e boas práticas de arquitetura. Atuo no desenvolvimento de aplicações utilizando o ecossistema .NET e C#.',
    p2: 'Gosto de transformar problemas complexos em soluções simples e sustentáveis, sempre buscando o equilíbrio entre entrega rápida e qualidade a longo prazo.',
    cta: 'Ver Projetos',
  },
  en: {
    kicker: '// who i am',
    title: 'Backend first, always with clarity.',
    p1: 'I am a software developer specialized in Backend, focused on code quality, performance and solid architecture practices. I build applications within the .NET and C# ecosystem.',
    p2: 'I enjoy turning complex problems into simple, sustainable solutions, always balancing fast delivery with long-term quality.',
    cta: 'View Projects',
  },
};

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  private languageService = inject(LanguageService);
  public t = computed(() => TEXT[this.languageService.lang()]);
}
