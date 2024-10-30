import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // Import Router
import { NavigationComponent } from './navigation/navigation.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavigationComponent, ProgressBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotel-booking';
  
  constructor(public router: Router) {} // Inject the Router here
}
