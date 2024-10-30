import { Component } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component'; 
import { KaisekiComponent } from '../kaiseki/kaiseki.component'; 
import { SightseeingModule } from '../sightseeing/sightseeing.module'; // Zorg ervoor dat je de module importeert
import { AccessComponent } from '../access/access.component';
import { FooterModule } from '../footer/footer.module'; // Zorg ervoor dat het pad klopt
import { NavigationComponent } from '../navigation/navigation.component'; // Adjust the path accordingly

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RoomsComponent, NavigationComponent, KaisekiComponent, SightseeingModule, AccessComponent, FooterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Add any logic specific to the HomeComponent here
}
