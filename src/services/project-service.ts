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
    {
      id: 2,
      name: 'Event-Driven Notifications',
      image: 'project_rabbitmq/rabbitmq.png',
      images: [
        'project_rabbitmq/rabbitmq.png',
      ],
      resume: 'Demonstração de arquitetura orientada a eventos com .NET 10 e RabbitMQ, focada em desacoplamento de serviços e processamento assíncrono de notificações.',
      description: `Sistema de notificações assíncronas para clínica estética desenvolvido para demonstrar arquitetura orientada a eventos na prática.

        Quando um agendamento é confirmado ou cancelado, a API publica um evento no RabbitMQ através de um Direct Exchange, que roteia a mensagem para filas independentes, uma para clientes e outra para administradores. Cada fila é consumida por um Worker Service rodando em background, responsável por processar o evento e enviar a notificação push via Expo Push Notifications.

        A separação em duas filas independentes permite escalar o processamento de notificações para ADM de forma independente do cliente, monitorar cada fluxo separadamente e aplicar regras distintas por destinatário sem acoplamento entre eles.

        O projeto foi estruturado em três camadas, Demo.API, Demo.Consumer e Demo.Contracts, com interfaces desacopladas que permitem trocar o broker de mensageria sem impacto no domínio da aplicação.`,
      challenges: `
        Um dos principais desafios foi entender o ciclo de vida das conexões com o RabbitMQ em um contexto de injeção de dependência do .NET. A conexão com o broker é cara de criar e deve ser reutilizada durante toda a vida da aplicação, o que exigiu registrar o publisher como Singleton e gerenciar corretamente o seu ciclo de vida e o Dispose assíncrono.

        Outro desafio foi garantir a resiliência no processamento das mensagens. Configurar o ack manual corretamente, confirmando a mensagem apenas após o processamento bem-sucedido e enviando para a Dead Letter Queue em caso de falha, foi essencial para evitar perda silenciosa de mensagens ou loops infinitos de reprocessamento.

        A integração entre os Workers e os Handlers também exigiu atenção: Workers são Singletons por natureza, mas os Handlers precisam de um escopo por mensagem processada, o que foi resolvido com IServiceProvider e CreateScope() a cada consumo.
      `,
      lessons: `
        Durante o desenvolvimento deste projeto, aprofundei meu entendimento sobre mensageria assíncrona e os padrões que tornam sistemas distribuídos mais resilientes e desacoplados.

        Aprendi na prática a diferença entre requeue: true, requeue: false e Dead Letter Queue, e como cada escolha impacta diretamente a confiabilidade do sistema em produção.

        Entendi como estruturar projetos orientados a eventos com separação clara entre contratos, publicação e consumo, aplicando interfaces para desacoplar o domínio da infraestrutura de mensageria.

        Também evoluí na configuração de ambientes com Docker Compose orquestrando múltiplos serviços com healthcheck e dependências entre containers, garantindo que o RabbitMQ esteja pronto antes da API e do Consumer iniciarem.
      `,
      type: 'Backend',
      alt: 'Diagrama de arquitetura do projeto Event-Driven Notifications',
      showGithubRepo: false,
      technologies: [
        '.NET 10',
        'RabbitMQ',
        'Worker Service',
        'Docker',
        'Docker Compose',
        'GitHub Actions',
        'Expo Push Notifications',
        'C#',
        'xUnit',
      ],
      features: [
        'Arquitetura orientada a eventos com Direct Exchange e roteamento por routing keys.',
        'Filas independentes para clientes e administradores com priorização de mensagens para ADM.',
        'Dead Letter Queue configurada por fila para retenção e reprocessamento de falhas.',
        'Worker Services consumindo filas em background com IHostedService e ack manual.',
        'Publisher registrado como Singleton com gerenciamento correto de conexão e Dispose assíncrono.',
        'Contratos compartilhados entre API e Consumer via projeto Demo.Contracts com interfaces desacopladas.',
        'Integração com Expo Push Notifications para envio de alertas em tempo real.',
        'Docker Compose orquestrando API, Consumer e RabbitMQ com healthcheck e depends_on.',
        'CI/CD com GitHub Actions executando build a cada push para main.',
      ],
      link: 'https://github.com/ThomasDixini/dotnet-rabbitmq-demo'
    },
  ];

  public getProjects(): Project[] {
    return this._projects;
  }
}
