import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component'; // Import ProgressBarComponent

@Component({
  selector: 'app-reserve',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ProgressBarComponent // Add ProgressBarComponent here
  ],
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss'],
})
export class ReserveComponent {
  minDate: Date = new Date();
  maxDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  checkinDate: Date | null = null;
  checkoutDate: Date | null = null;
  selectedRoom: any = null;
  currentStep: number = 1; // Define current step for the progress bar

  rooms = [
    {
      id: 1,
      name: 'Room A',
      description: 'Luxury room A',
      price: 150,
      membershipPrice: 130,
      regularPrice: 160,
      image: 'assets/room.jpg',
    },
    {
      id: 2,
      name: 'Room B',
      description: 'Luxury room B',
      price: 200,
      membershipPrice: 180,
      regularPrice: 220,
      image: 'assets/room.jpg',
    },
  ];

  constructor(private router: Router) {}

  bookRoom(room: any) {
    this.selectedRoom = room;
    this.checkinDate = null;
    this.checkoutDate = null;
  }

  confirmBooking() {
    if (this.checkinDate && this.checkoutDate) {
      console.log('Booking confirmed from', this.checkinDate, 'to', this.checkoutDate);
      this.router.navigate(['/confirmation'], {
        state: {
          room: this.selectedRoom,
          checkin: this.checkinDate,
          checkout: this.checkoutDate
        }
      });
    } else {
      console.log('Please select both check-in and check-out dates.');
    }
  }

  cancelBooking() {
    this.selectedRoom = null;
    this.checkinDate = null;
    this.checkoutDate = null;
  }

  checkAvailability() {
    if (this.checkinDate && this.checkoutDate) {
      console.log('Checking availability from', this.checkinDate, 'to', this.checkoutDate);
    } else {
      console.log('Please select both check-in and check-out dates.');
    }
  }
}
