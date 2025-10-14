import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/Project';
import { ProjectService } from '../../../services/project-service';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss'
})
export class ProjectDetails {
  private projectService = inject(ProjectService);
  private activatedRoute = inject(ActivatedRoute);
  private _projectId: number | null;
  public project: Project;

  constructor(){
    this._projectId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProjects().find(c => c.id === this._projectId)!;
  }
}
