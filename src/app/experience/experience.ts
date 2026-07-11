import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';

interface ExperienceItem {
  period: { pt: string; en: string };
  role: { pt: string; en: string };
  company: string;
  highlights: { pt: string; en: string }[];
}

const SECTION_TEXT = {
  pt: { kicker: '// trajetória', title: 'Experiência profissional' },
  en: { kicker: '// journey', title: 'Professional experience' },
};

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  private languageService = inject(LanguageService);
  public lang = this.languageService.lang;
  public t = computed(() => SECTION_TEXT[this.lang()]);

  public experiences: ExperienceItem[] = [
    {
      period: { pt: 'Nov 2024 — Atualmente', en: 'Nov 2024 — Present' },
      role: { pt: 'Desenvolvedor Backend .NET', en: 'Backend .NET Developer' },
      company: 'VMS Informática',
      highlights: [
        {
          pt: 'Atuo no desenvolvimento e manutenção de um sistema ERP voltado para gestão comercial, trabalhando com C#, ASP.NET Core e SQL Server, garantindo sua manutenção e aprimoramento contínuo com novas funcionalidades.',
          en: 'I develop and maintain an ERP system for commercial management, working with C#, ASP.NET Core and SQL Server, ensuring its upkeep and continuous improvement with new features.',
        },
        {
          pt: 'Otimizei consultas em banco de dados com cerca de 900 mil registros, reduzindo o tempo de resposta de 15s para 1s por meio da criação de índices no SQL Server.',
          en: 'Optimized database queries over roughly 900k records, reducing response time from 15s to 1s by creating indexes in SQL Server.',
        },
        {
          pt: 'Propus e liderei a migração arquitetural de sistema legado para Domain-Driven Design (DDD), convencendo a gestão sobre o impacto técnico, definindo os padrões e conduzindo o time, reduzindo o tempo de entrega de novas funcionalidades em 20%.',
          en: 'Proposed and led the architectural migration of a legacy system to Domain-Driven Design (DDD), convincing management of the technical impact, defining the standards and guiding the team, cutting new feature delivery time by 20%.',
        },
        {
          pt: 'Reduzi o consumo do banco de dados (SQL Server) em 40% ao refatorar queries que buscavam todos os registros, aplicando seleção de campos específicos com EF Core e IQueryable.',
          en: 'Reduced SQL Server database load by 40% by refactoring queries that fetched entire records, applying specific field selection with EF Core and IQueryable.',
        },
        {
          pt: 'Diagnostiquei e eliminei um bug crítico de race condition que causava inconsistência de dados em operações simultâneas de múltiplos usuários, implementando controle de concorrência otimista via timestamps no Entity Framework Core e zerando as ocorrências do problema em produção.',
          en: 'Diagnosed and eliminated a critical race condition bug causing data inconsistency during concurrent multi-user operations, implementing optimistic concurrency control via timestamps in Entity Framework Core and reducing occurrences in production to zero.',
        },
        {
          pt: 'Identifiquei gargalos de performance e reduzi o consumo de DTU em 30% por meio de monitoramento de rotas críticas via Azure Application Insights e refatoração das mais lentas.',
          en: 'Identified performance bottlenecks and reduced DTU consumption by 30% by monitoring critical routes with Azure Application Insights and refactoring the slowest ones.',
        },
        {
          pt: 'Eliminei bloqueios em módulos do sistema otimizando o tempo de carregamento de 2 minutos para 20s, implementando busca assíncrona paralela e paginação server-side dos dados.',
          en: 'Eliminated bottlenecks in system modules, cutting load time from 2 minutes to 20s by implementing parallel asynchronous fetching and server-side pagination.',
        },
        {
          pt: 'Reestruturei o módulo de geração de relatórios aplicando orientação a objetos e eliminando duplicação de código, reduzindo o tempo de implementação de novos relatórios e permitindo que o time evoluísse o módulo de forma independente.',
          en: 'Restructured the report generation module applying object-oriented design and removing code duplication, reducing implementation time for new reports and letting the team evolve the module independently.',
        },
      ],
    },
    {
      period: { pt: 'Dez 2023 — Out 2024', en: 'Dec 2023 — Oct 2024' },
      role: { pt: 'Analista de Dados', en: 'Data Analyst' },
      company: 'Dellas Comércio e Transportes',
      highlights: [
        {
          pt: 'Desenvolvi consultas avançadas em SQL Server, automatizando extração de dados e geração de relatórios estratégicos.',
          en: 'Developed advanced SQL Server queries, automating data extraction and strategic report generation.',
        },
        {
          pt: 'Implementei processos de ETL para consolidar dados do ERP Protheus (TOTVS), garantindo integridade e padronização.',
          en: 'Implemented ETL processes to consolidate data from the Protheus (TOTVS) ERP, ensuring data integrity and standardization.',
        },
        {
          pt: 'Arquiteturei dashboards interativos no Power BI, transformando requisitos de negócio em visualizações de alto impacto.',
          en: 'Architected interactive Power BI dashboards, turning business requirements into high-impact visualizations.',
        },
      ],
    },
  ];
}
