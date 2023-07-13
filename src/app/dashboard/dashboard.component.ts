import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../service/apiservice.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listOfNames: any[] = [''];
  // retrieved data
  countryName: string = '';
  selectedCountry: string = '';
  pendentStatus: boolean = false;
  unMember: boolean = false;
  capital: string = '';
  region: string = '';
  subregion: string = '';
  landArea: string = '';
  latLong: any[] =[''];
  population: string = '';
  drivingSide: string = '';
  timezone: string = '';
  weekBegins: string = '';
  languages: any[] =[''];
  demonyms: any[] =[''];
  gini: string = '';
  // image urls
  flag: string = '';
  coatOfArms: string = '';
  // land map variables
  map: any='';
  lat: any='';
  long: any='';
  scale: any='';
  // on page displays
  cards: boolean = false;
  show: boolean = true;
  hide: boolean = true;
  // erors
  countryError: boolean = false;
  // descriptions
  countryDescription: string = 'Country common name';

  constructor(
    private http: HttpClient,
    private apiservice: ApiserviceService,
  ) { }

  ngOnInit(): void {
    this.getCountryNames();
  }

  getCountryNames(){
    this.listOfNames = [''];
  // call api for all country names
   this.http.get<any>('https://restcountries.com/v3.1/all?fields=name').subscribe(res => {
    for (let i = 0; i < res.length; i ++){
      this.listOfNames.push(res[i].name.common);
    }
    this.listOfNames.sort();
   });
  }

  getCountryData(){
    // reset values
    this.countryName = '';
    this.pendentStatus = false;
    this.unMember = false;
    this.capital = '';
    this.region  = '';
    this.subregion = '';
    this.landArea = '';
    this.latLong = [''];
    this.lat = '';
    this.long = '';
    this.scale = '';
    
    // find selected country
    this.selectedCountry = (<HTMLSelectElement>document.getElementById("country")).value;

    // get overall data from country
    this.http.get<any>('https://restcountries.com/v3.1/name/' + this.selectedCountry + '?fullText=true').subscribe(res => {
      for (let i = 0; i < res.length; i ++){
        if (res.length > 0){
          // display
          this.countryError = false;
          this.cards = true;
          // retrieved information
          this.countryName = res[0].name.common
          this.pendentStatus = res[0].independent
          this.unMember = res[0].unMember
          this.capital = res[0].capital
          this.region = res[0].region
          this.subregion = res[0].subregion
          this.landArea = res[0].area
          this.latLong = res[0].latlng
          this.lat = res[0].latlng[0];
          this.long = res[0].latlng[1];
          this.scale = 10;
          this.initMap(this.lat, this.long, this.scale);
          this.population = res[0].population;
          this.drivingSide = res[0].car.side
          this.timezone = res[0].timezones
          this.flag = res[0].flags.png
          this.coatOfArms = res[0].coatOfArms.png
          this.weekBegins = res[0].startOfWeek
          this.languages =  res[0].languages[0]
          this.demonyms = res[0].demonyms.eng.m
          this.gini = res[0].gini
        }else{
          // display
          this.countryError = true;
          this.cards = false;
        }
      }
    });
  }

  initMap(x: number, y: number, z: number | undefined) {
    // Clear previous instance of the map
    if (this.map) {
      this.map.remove();
    }

    this.map = new L.Map('map').setView([x, y], z); // Set initial coordinates and zoom level
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' // Add attribution for OpenStreetMap
    }).addTo(this.map);
  //   L.tileLayer('https://{s}.tile.www.osmap.us/#{z}/{x}/{y}', { attribution: '© OpenStreetMap contributors' // Add attribution for OpenStreetMap
  // }).addTo(this.map);
  }
}
