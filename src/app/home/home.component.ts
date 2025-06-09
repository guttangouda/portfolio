import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('staggerProjects', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'scale(0.95)' }),
          stagger(150, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ])
      ])
    ])
  ]
})

export class HomeComponent {
  constructor(private router: Router) {}

 OnClickAbout() {
    this.router.navigate(['/about']);  // Navigate programmatically to /about page
  }
}
