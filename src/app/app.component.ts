import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  map: any;

  constructor() {}

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private loadMap(): void {
    var profileIcon = L.icon({
      iconUrl: 'assets/images/profile-default.png',
      iconSize: [40, 40], // size of the icon
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    var marker = L.marker([51.5, -0.09], { icon: profileIcon }).addTo(map);
  }
}
