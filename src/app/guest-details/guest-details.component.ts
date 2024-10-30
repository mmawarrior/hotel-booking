import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component'; // Import ProgressBarComponent

@Component({
  selector: 'app-guest-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgressBarComponent],  // Add ProgressBarComponent here
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.scss'],
})
export class GuestDetailsComponent {
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  cardNumber: string = ''; // Add card number
  expiryDate: string = ''; // Add expiry date
  cvv: string = ''; // Add CVV
  currentStep: number = 2; // Set current step to 1 for guest details

  constructor(private router: Router) {}

  submitGuestDetails() {
    // Logic for submitting guest details
    console.log('Guest Details:', this.email, this.firstName, this.lastName, this.phone);
    this.currentStep = 2; // Move to payment step after submitting details
  }

  confirmPayment() {
    // Logic to confirm payment
    console.log('Payment confirmed:', this.cardNumber, this.expiryDate, this.cvv);
    // Navigate to the confirmation page after payment
    this.router.navigate(['/booking-confirmation'], {
      state: {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        cardNumber: this.cardNumber,
        expiryDate: this.expiryDate,
        cvv: this.cvv,
      }
    });
  }

  cancelBooking() {
    // Logic to cancel booking
    console.log('Booking canceled');
    this.router.navigate(['/rooms']);
  }
}
