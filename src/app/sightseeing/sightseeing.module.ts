import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SightseeingComponent } from './sightseeing.component';

@NgModule({
  imports: [CommonModule, SightseeingComponent], // Importeer de SightseeingComponent
  exports: [SightseeingComponent] // Zorg ervoor dat je het exporteert
})
export class SightseeingModule {}
