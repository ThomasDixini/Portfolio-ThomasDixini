import { Injectable } from '@angular/core';
import { Project } from '../app/projects/models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projects: Project[] = [
    {
      id: 1,
      name: 'Aplicativo de Estética',
      image: 'project_estetica/Procedimentos.png',
      images: [
        'project_estetica/Procedimentos.png',
        'project_estetica/Consultas.png',
        'project_estetica/AgendarConsulta1.png',
        'project_estetica/Produtos.png',
        'project_estetica/produto.png',
        'project_estetica/Tela Login.png',
        'project_estetica/TelaDeCadastro.png',
        'project_estetica/login.png',
        'project_estetica/usuario.png',
        'project_estetica/Drawer.png',
      ],
      resume: 'Aplicativo de agendamento de consultas de estética, que facilita o gerenciamento de atendimentos e melhora a experiência de clientes e profissional. ',
      description: `Aplicativo desenvolvido para otimizar o gerenciamento de atendimentos estéticos e aprimorar a experiência tanto do cliente quanto da profissional.
        A plataforma permite que clientes agendem procedimentos de forma rápida e intuitiva, consultem valores e descrições detalhadas dos serviços, e recebam notificações de lembrete sobre seus horários marcados.

        Para a profissional, o app oferece ferramentas de controle e organização dos atendimentos, além de possibilitar o vínculo direto entre serviços e clientes.
        O aplicativo também conta com uma seção de produtos disponíveis para venda, onde o usuário pode iniciar uma conversa com a profissional via integração com o WhatsApp para obter mais informações.

        Em resumo, o projeto reúne praticidade, automação e comunicação em um único ambiente digital, trazendo mais eficiência na gestão de horários e conveniência para os clientes.`,
      challenges: `
        Um dos principais desafios do projeto foi o desenvolvimento multiplataforma, garantindo que a aplicação funcionasse corretamente em Android, iOS e Web.
        O foco inicial estava no Android, núcleo principal do aplicativo, mas foi necessário adaptar e reestruturar algumas funcionalidades para criar também uma versão web compatível com iOS, mantendo a mesma experiência do usuário em todas as plataformas.

        Outro desafio importante foi a integração de notificações push em múltiplos ambientes. Para isso, foi implementado um sistema que gerencia permissões de notificação, capturando o ID exclusivo do dispositivo para identificar usuários e controlar o envio de alertas.
        A solução foi desenvolvida utilizando o Expo Notifications para Android e o Firebase Cloud Messaging (FCM) para iOS e Web, assegurando um fluxo de comunicação confiável e integrado.
      `,
      lessons: `
      Durante o desenvolvimento deste projeto, pude aperfeiçoar a modelagem de tabelas e a estruturação geral da aplicação, aplicando boas práticas de organização e manutenção do código.
      Evoluí também na criação e implementação de APIs RESTful, aprimorando o controle de rotas, autenticação e comunicação entre serviços.

      Aprofundei meus conhecimentos sobre Push Notifications, entendendo a importância de solicitar a permissão do usuário e gerenciar corretamente os identificadores de dispositivos.
      Além disso, adquiri experiência prática com o ecossistema da Microsoft Azure, desde a criação e publicação da API até a integração do banco de dados na nuvem.

      Outro ponto importante foi o aprendizado sobre processos de publicação de aplicativos na Play Store, compreendendo as etapas de empacotamento, assinatura e envio para revisão.

      Por fim, tive a oportunidade de trabalhar com um cliente real, o que me permitiu compreender melhor as necessidades do usuário final e propor soluções ideais e personalizadas para o projeto.
      `,
      type: 'Mobile',
      alt: 'Preview do Aplicativo de Estética',
      showGithubRepo: false,
      technologies: [
        'React Native',
        'C#',
        'SQL Server',
        'Azure',
        'Firebase Cloud Messaging',
        'Expo Notifications',
        'JWT Authentication',
        'Docker',
        'NGINX'
      ],
      features: [
        'Desenvolvimento de APIs RESTful seguindo boas práticas de arquitetura.',
        'Manipulação e mapeamento de dados utilizando Entity Framework Core',
        'Implementação de autenticação segura com JWT (JSON Web Token)',
        'Publicação e deploy de aplicações na Microsoft Azure.',
        'Integração de Firebase Cloud Messaging (FCM) para envio de notificações push.',
        'Uso do Expo Notifications para gerenciamento de notificações em aplicativos Android.',
        'Otimização de desempenho com paginação eficiente no carregamento de dados.',
        'Configuração de ambientes Docker para desenvolvimento.',
        'Load balancing e proxy reverso utilizando NGINX.',
      ],
      link: 'https://www.github.com/ThomasDixini/AplicativoEsteticaDemonstracao'
    },
  ];

  public getProjects(): Project[] {
    return this._projects;
  }
}
