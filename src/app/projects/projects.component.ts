import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('staggerProjects', [
      transition(':enter', [
        query('.project', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(150, [
            animate(
              '600ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ])
      ])
    ])
  ]
})
export class ProjectsComponent {
 projects = [
    {
      title: '.NET Solutions',
      description:
        'Developed various applications and services using .NET framework.'
    },
    {
      title: 'Angular Projects',
      description:
        'Built responsive and dynamic web applications with Angular.'
    },
    {
      title: 'POS and Hotel Management Systems',
      description:
        'Designed and implemented POS and hotel management systems.'
    }
  ];
}
