import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Farland - 2D Platform Game',
      description:
        'Developed a 2D platform game using the GODOT game engine with GD Script..',
      techList: ['GODOT', 'GDScript',],
      github: 'https://github.com/AshishThakur10/Farland',
      screenshot: '/assets/project/farland.png',
      live: 'https://ashdev.itch.io/farland',
    },
    {
      title: 'Entity Management API',
      description:
        'A RESTful API developed in .NET Core for managing entities, with features like CRUD operations, pagination, sorting, and retry/backoff mechanisms.',
      techList: ['.NET Core', 'Polly', 'xUnit'],
      github: 'https://github.com/AshishThakur10/EntityManagementAPI',
      screenshot: '/assets/project/EntityManagmentAPI.png',
      live: 'https://entitymanagementapi.onrender.com/swagger/index.html',
    },   
    {
      title: 'Professional and Academic Portal for the Informatics Faculty',
      description:
        'This portal manages academic resources like notes, marks, results, and notices for students, teachers, and HODs. Developed with Next.js, PostgreSQL, and Clerk. Login with username - Ashish and pawword - admin',
      techList: ['Next.js', 'PostgreSQL', 'Clerk'],
      github: 'https://github.com/AshishThakur10/mca',
      screenshot: '/assets/project/academic_portal.png',
      live: 'https://academic-portal.netlify.app/',
    },
  ];

  public visibleProjects = this.projects.slice(0, 3);

  showMoreProjects() {
    if (this.visibleProjects.length < this.projects.length) {
      this.visibleProjects = this.projects.slice(
        0,
        this.visibleProjects.length + 3
      );
    }
  }
}
