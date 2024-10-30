import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { KaisekiComponent } from './kaiseki/kaiseki.component';
import { SightseeingComponent } from './sightseeing/sightseeing.component';
import { AccessComponent } from './access/access.component';
import { ContactComponent } from './contact/contact.component';
import { ReserveComponent } from './reserve/reserve.component'; // Import the ReserveComponent
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'kaiseki', component: KaisekiComponent },
  { path: 'sightseeing', component: SightseeingComponent },
  { path: 'access', component: AccessComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '', redirectTo: '/reserve', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
