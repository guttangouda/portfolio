import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule ],
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
