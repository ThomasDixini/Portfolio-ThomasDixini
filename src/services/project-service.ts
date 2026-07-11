import { Injectable } from '@angular/core';
import { Project } from '../app/projects/models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projects: Project[] = [
    {
      id: 1,
      name: 'YFCore',
      image: 'project_yfcore/yfcore-cover.svg',
      images: [
        'project_yfcore/yfcore-cover.svg',
      ],
      resume: 'Backend desenvolvido em ASP.NET Core utilizando Domain-Driven Design (DDD), Clean Architecture, CQRS, Entity Framework Core e JWT Authentication, com foco em escalabilidade, manutenção e boas práticas de desenvolvimento.',
      description: `Sistema para gerenciamento de agendamentos de clínica estética, construído com Domain-Driven Design (DDD) e Clean Architecture, separando o domínio em camadas (Domain, Application, Infrastructure, API) com responsabilidades bem definidas.
        A API expõe os casos de uso via CQRS com MediatR, separando comandos de queries e mantendo a lógica de negócio isolada de detalhes de infraestrutura. Autenticação e autorização são feitas com ASP.NET Identity e JWT, com validação de entrada centralizada via FluentValidation.

        A documentação da API é gerada com Scalar API Reference, e o projeto conta com cobertura de testes unitários e de integração usando xUnit, Moq e FluentAssertions, com pipeline de CI/CD via GitHub Actions.`,
      challenges: `
        Um dos principais desafios foi modelar o domínio de agendamentos respeitando os limites de contexto do DDD, evitando que regras de negócio vazassem para as camadas de infraestrutura ou apresentação.

        Outro desafio foi estruturar corretamente o fluxo de CQRS com MediatR, definindo quando um caso de uso deveria ser tratado como comando ou como query, mantendo os handlers coesos e testáveis.

        Também foi necessário desenhar as validações de entrada de forma centralizada com FluentValidation, evitando duplicação de regras espalhadas pelos controllers e garantindo mensagens de erro consistentes para os clientes da API.
      `,
      lessons: `
        Durante o desenvolvimento deste projeto, aprofundei meu entendimento sobre Domain-Driven Design na prática, aprendendo a modelar entidades, agregados e value objects de forma que o código realmente refletisse as regras do negócio.

        Evoluí na aplicação de CQRS com MediatR, entendendo os trade-offs entre separar leitura e escrita e como isso simplifica a manutenção de sistemas com regras de negócio complexas.

        Também aprendi a importância de uma camada de validação centralizada com FluentValidation e de documentação de API sempre atualizada com Scalar API Reference, além de reforçar boas práticas de testes automatizados com xUnit, Moq e FluentAssertions.
      `,
      type: 'Backend',
      alt: 'Preview do sistema YFCore',
      showGithubRepo: false,
      technologies: [
        'C#',
        '.NET 10',
        'ASP.NET Core',
        'Entity Framework Core',
        'SQL Server',
        'MediatR (CQRS)',
        'Domain-Driven Design (DDD)',
        'Clean Architecture',
        'JWT Authentication',
        'ASP.NET Identity',
        'FluentValidation',
        'Scalar API Reference',
        'xUnit',
        'Moq',
        'FluentAssertions',
        'GitHub Actions',
      ],
      features: [
        'Arquitetura em camadas seguindo Domain-Driven Design (DDD) e Clean Architecture.',
        'CQRS implementado com MediatR, separando comandos e queries.',
        'Autenticação e autorização com ASP.NET Identity e JWT.',
        'Validações de entrada centralizadas com FluentValidation.',
        'Documentação de API gerada com Scalar API Reference.',
        'Testes unitários e de integração com xUnit, Moq e FluentAssertions.',
        'Pipeline de CI/CD configurado com GitHub Actions.',
      ],
      link: 'https://www.github.com/ThomasDixini/AplicativoEsteticaDemonstracao'
    },
    {
      id: 2,
      name: 'Mensageria',
      image: 'project_rabbitmq/rabbitmq.png',
      images: [
        'project_rabbitmq/rabbitmq.png',
      ],
      resume: 'Sistema de mensageria para processamento assíncrono de dados do YFCore, usando RabbitMQ e Workers para desacoplar o envio de notificações da API principal.',
      description: `Sistema de notificações assíncronas desenvolvido para o YFCore, demonstrando arquitetura orientada a eventos na prática.

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
      alt: 'Diagrama de arquitetura do projeto Mensageria',
      showGithubRepo: false,
      technologies: [
        'C#',
        '.NET 10',
        'RabbitMQ',
        'Workers',
        'Docker',
        'Docker Compose',
        'GitHub Actions',
        'Expo Push Notifications',
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
