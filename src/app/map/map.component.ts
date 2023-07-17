import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() lat: any = '';
  @Input() long: any = '';
  @Input() scale: any = '';

  map: any = '';

  constructor() { }

  ngOnInit(): void {
    this.map = new L.Map('map');
    this.initMap(this.lat, this.long, this. scale);
  }  

  initMap(x: number, y: number, z: number | undefined) {
      this.map.setView([x, y], z); // Set initial coordinates and zoom level
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors' // Add attribution for OpenStreetMap
      }).addTo(this.map);
  }
}
