import { Component, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Project } from './models/Project';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project-service';

@Component({
  selector: 'app-projects',
  imports: [CarouselModule, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  public projectService = inject(ProjectService);
  public projects = this.projectService.getProjects();
  public toRestoreProjects: Project[] = [...this.projects];

  public filters = this.projects.map(c => c.type).filter((obj, index, self) => index === self.findIndex((o) => o === obj));
  public selectedFilter = 'Todos';

  constructor(){
    this.filters.unshift('Todos');
  }

  public selectFilter(filter: string){
    this.selectedFilter = filter;

    if(filter === 'Todos'){
      this.projects = [...this.toRestoreProjects]
    } else {
      this.projects = this.toRestoreProjects.filter(c => c.type === filter);
    }
  }
  
}
