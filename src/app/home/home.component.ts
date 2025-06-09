import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LayoutComponent } from "../layout/layout.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private router: Router) {}

 
}
