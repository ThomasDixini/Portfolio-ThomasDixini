import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';

interface StackItem {
  name: string;
  tag: { pt: string; en: string };
}

const SECTION_TEXT = {
  pt: { kicker: '// tecnologias', title: 'Ferramentas do dia a dia' },
  en: { kicker: '// technologies', title: 'Everyday tools' },
};

@Component({
  selector: 'app-stack',
  imports: [],
  templateUrl: './stack.html',
  styleUrl: './stack.scss'
})
export class Stack {
  private languageService = inject(LanguageService);
  public lang = this.languageService.lang;
  public t = computed(() => SECTION_TEXT[this.lang()]);

  public stack: StackItem[] = [
    { name: 'C#', tag: { pt: 'linguagem', en: 'language' } },
    { name: '.NET / ASP.NET Core', tag: { pt: 'backend', en: 'backend' } },
    { name: 'Entity Framework Core', tag: { pt: 'orm', en: 'orm' } },
    { name: 'SQL Server', tag: { pt: 'banco de dados', en: 'database' } },
    { name: 'Redis', tag: { pt: 'cache', en: 'cache' } },
    { name: 'SignalR', tag: { pt: 'tempo real', en: 'real-time' } },
    { name: 'RabbitMQ', tag: { pt: 'mensageria', en: 'messaging' } },
    { name: 'Docker / Docker Compose', tag: { pt: 'infra', en: 'infra' } },
    { name: 'Domain-Driven Design', tag: { pt: 'arquitetura', en: 'architecture' } },
    { name: 'Clean Architecture', tag: { pt: 'arquitetura', en: 'architecture' } },
    { name: 'MediatR (CQRS)', tag: { pt: 'arquitetura', en: 'architecture' } },
    { name: 'JWT / ASP.NET Identity', tag: { pt: 'autenticação', en: 'authentication' } },
    { name: 'FluentValidation', tag: { pt: 'validação', en: 'validation' } },
    { name: 'xUnit / Moq / FluentAssertions', tag: { pt: 'testes', en: 'testing' } },
    { name: 'Azure Application Insights', tag: { pt: 'observabilidade', en: 'observability' } },
    { name: 'Git / GitHub Actions', tag: { pt: 'devops', en: 'devops' } },
  ];
}
