export interface ProjectTranslation {
  resume: string;
  type: string;
  alt: string;
}

export const projectTranslationsEn: Record<number, ProjectTranslation> = {
  1: {
    resume: 'E-commerce built with ASP.NET Core, Angular and PostgreSQL, featuring authentication, catalog management, order processing and integration with Mercado Pago.',
    type: 'Fullstack',
    alt: 'Lvsport system preview',
  },
  2: {
    resume: 'Backend built with ASP.NET Core using Domain-Driven Design (DDD), Clean Architecture, CQRS, Entity Framework Core and JWT Authentication, focused on scalability, maintainability and development best practices.',
    type: 'Backend',
    alt: 'YFCore system preview',
  },
  3: {
    resume: 'Messaging system for asynchronous data processing in YFCore, using RabbitMQ and Workers to decouple notification delivery from the main API.',
    type: 'Backend',
    alt: 'Mensageria project architecture diagram',
  },
};
