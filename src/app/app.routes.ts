import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';
import { HotelComponent } from './hotel/hotel.component';
import { KaisekiComponent } from './kaiseki/kaiseki.component';
import { SightseeingComponent } from './sightseeing/sightseeing.component';
import { AccessComponent } from './access/access.component';
import { FooterComponent } from './footer/footer.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { GuestDetailsComponent } from './guest-details/guest-details.component'; // Import the component
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'kaiseki', component: KaisekiComponent },
  { path: 'sightseeing', component: SightseeingComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'access', component: AccessComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'guest-details', component: GuestDetailsComponent }, // Add guest details route
  { path: 'booking-confirmation', component: BookingConfirmationComponent },
  { path: '**', redirectTo: '' } // Redirect for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
