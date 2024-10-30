import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component'; // Import ProgressBarComponent

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent], // Add ProgressBarComponent here
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  // Your component logic
}
