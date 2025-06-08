import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "../layout/layout.component";
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {

skills = [
    'Angular', 'TypeScript', 'JavaScript',
    '.NET Core', 'C#', 'Entity Framework',
    'SQL Server', 'HTML', 'CSS', 'SCSS',
    'REST API', 'Git', 'Azure'
  ];
}
