import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "../layout/layout.component";
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 projects = [
    {
      title: '.NET Solutions',
      description: 'Developed various applications and services using .NET framework.'
    },
    {
      title: 'Angular Projects',
      description: 'Built responsive and dynamic web applications with Angular.'
    },
    {
      title: 'POS and Hotel Management Systems',
      description: 'Designed and implemented POS and hotel management systems.'
    }
  ];
}
