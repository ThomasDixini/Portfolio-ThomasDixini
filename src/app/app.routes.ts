import { Routes } from '@angular/router';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { ProjectDetails } from './projects/project-details/project-details';

export const routes: Routes = [
    {
        path : '', 
        title: 'Sobre Mim',
        component: About
    },
    {
        path : 'projects', 
        title: 'Projetos',
        component: Projects
    },
    {
        path : 'projects/:id', 
        title: 'Projeto',
        component: ProjectDetails
    },
    {
        path : 'contact', 
        title: 'Contato',
        component: Contact
    },
];
