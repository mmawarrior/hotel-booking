import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.scss'],
})
export class BookingConfirmationComponent {
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  currentStep: number = 3; // Zet currentStep op 3 om alle stappen geel te maken

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.email = navigation.extras.state['email'];
      this.firstName = navigation.extras.state['firstName'];
      this.lastName = navigation.extras.state['lastName'];
      this.phone = navigation.extras.state['phone'];
      this.cardNumber = navigation.extras.state['cardNumber'];
      this.expiryDate = navigation.extras.state['expiryDate'];
      this.cvv = navigation.extras.state['cvv'];
    }
  }

  goToHome() {
    this.router.navigate(['/']); // Navigeren naar de homepagina
  }
}
