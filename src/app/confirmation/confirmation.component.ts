import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  currentStep: number = 1; // Voeg currentStep toe en stel in op 3 voor bevestiging
  room: any = null;
  checkinDate: any = null;
  checkoutDate: any = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.room = navigation.extras.state['room'];
      this.checkinDate = navigation.extras.state['checkin'];
      this.checkoutDate = navigation.extras.state['checkout'];
    }
  }

  confirmBooking() {
    if (this.checkinDate && this.checkoutDate) {
      this.router.navigate(['/guest-details'], {
        state: {
          room: this.room,
          checkin: this.checkinDate,
          checkout: this.checkoutDate,
        },
      });
    } else {
      console.log('Please select both check-in and check-out dates.');
    }
  }

  cancelBooking() {
    this.router.navigate(['/rooms']);
  }
}
