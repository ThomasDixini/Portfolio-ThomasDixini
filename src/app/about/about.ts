import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../projects/models/Project';
import { ProjectService } from '../../services/project-service';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  public projectService = inject(ProjectService);
  public projects = this.projectService.getProjects();
}
