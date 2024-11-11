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
