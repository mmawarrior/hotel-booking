import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-access',
  standalone: true, // Ensure this is set to true
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})

export class AccessComponent implements OnInit {
  private map!: L.Map;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([36.5578, 139.6965], 15); // Coordinates for Nikko Hoshinoyado

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    L.marker([36.5578, 139.6965]).addTo(this.map)
      .bindPopup('Nikko Hoshinoyado')
      .openPopup();
  }
}
