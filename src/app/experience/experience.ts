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
      period: { pt: 'Nov 2024 - Atualmente', en: 'Nov 2024 - Present' },
      role: { pt: 'Desenvolvedor Backend .NET', en: 'Backend .NET Developer' },
      company: 'VMS Informática',
      highlights: [
      {
        pt: 'Desenvolvimento de APIs REST para módulos de vendas, estoque, faturamento e financeiro, implementando regras de negócio, filtros, paginação e integrações com serviços externos.',
        en: 'Developed REST APIs for sales, inventory, billing, and financial modules, implementing business rules, filtering, pagination, and external service integrations.',
      },
      {
        pt: 'Desenvolvimento de integrações com a TecnoSpeed/PlugNotas para emissão e processamento de documentos fiscais.',
        en: 'Developed integrations with TecnoSpeed/PlugNotas for issuing and processing electronic tax documents.',
      },
      {
        pt: 'Otimizei consultas em banco de dados com cerca de 900 mil registros, reduzindo o tempo de resposta de 15s para 1s por meio da criação de índices no SQL Server.',
        en: 'Optimized database queries over approximately 900k records, reducing response time from 15s to 1s by implementing indexes in SQL Server.',
      },
      {
        pt: 'Reduzi o consumo do banco de dados (SQL Server) em 40% ao refatorar queries que buscavam todos os registros, aplicando seleção de campos específicos com EF Core e IQueryable.',
        en: 'Reduced SQL Server database load by 40% by refactoring queries that retrieved entire records and selecting only required fields with EF Core and IQueryable.',
      },
      {
        pt: 'Diagnostiquei e eliminei um bug crítico de race condition que causava inconsistência de dados em operações simultâneas de múltiplos usuários, implementando controle de concorrência otimista via timestamps no Entity Framework Core e zerando as ocorrências do problema em produção.',
        en: 'Diagnosed and eliminated a critical race condition causing data inconsistencies during concurrent multi-user operations, implementing optimistic concurrency control with timestamps in Entity Framework Core and eliminating the issue from production.',
      },
      {
        pt: 'Análise e correção de problemas em produção, utilizando logs, consultas SQL e análise do fluxo de execução para identificar e solucionar causas raiz.',
        en: 'Investigated and resolved production issues by analyzing logs, SQL queries, and execution flows to identify and address root causes.',
      },
    ],
    },
    {
      period: { pt: 'Dez 2023 - Out 2024', en: 'Dec 2023 - Oct 2024' },
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
