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
      image: 'logo_app_1024.png',
      description: 'Aplicativo de agendamento de consultas de estética, que facilita o gerenciamento de atendimentos e melhora a experiência de clientes e profissionais. Permite marcar horários de forma rápida, receber notificações de lembrete e acompanhar os serviços disponíveis em tempo real.',
      resume: 'Aplicativo de agendamento de consultas de estética, que facilita o gerenciamento de atendimentos e melhora a experiência de clientes e profissionais. ',
      type: 'Mobile',
      alt: 'Preview do Aplicativo de Estética',
      technologies: [
        'React Native',
        'C#',
        'SQL Server',
        'Azure',
        'Firebase Cloud Messaging',
        'Expo Notifications',
        'JWT Authentication'
      ]
    },
  ];

  public getProjects(): Project[] {
    return this._projects;
  }
}
