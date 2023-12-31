import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Project } from 'src/app/project';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit 
{
  projects:Project[] = [];

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() 
  {
    this.projectsService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
        console.log(this.projects);
      },
      (error) => {
        console.error('Error Fetching projects:', error);
      }
      );
    }

}
