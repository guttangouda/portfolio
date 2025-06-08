import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(private router : Router){

  }
 OnClickAbout() {
    this.router.navigate(['/about']);  // Navigate programmatically to /about page
  }
  OnClickHome(){
    this.router.navigate(['/']);
  }
  OnClickProjects(){
    this.router.navigate(['/projects']);
  }
  OnClickSkills(){
    this.router.navigate(['/skills']);
  }
}
