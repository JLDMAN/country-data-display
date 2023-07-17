import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../service/apiservice.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

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
  population: string = '';
  drivingSide: string = '';
  timezone: string = '';
  weekBegins: string = '';
  languages: string = '';
  demonyms: any[] = [''];
  gini: string = '';
  // image urls
  flag: string = '';
  coatOfArms: string = '';
  // land map variables
  latLong: any[] = [''];
  scale: any = '';
  // on page displays
  cards: boolean = false;
  show: boolean = true;
  hide: boolean = true;
  // erors
  countryError: boolean = false;
  // descriptions
  countryDescription: string = 'Country common name';

  constructor(
    private apiservice: ApiserviceService,
    private spinner: NgxSpinnerService
  ) { }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    // load all country names
    this.loadCountryNames();
    // load initial values
    // this.loadCountryData();
  }

  loadCountryNames() {
    this.listOfNames = [''];
    // call api for all country names
    this.apiservice.getCountryNames().subscribe( res => {
      for (let i = 0; i < res.length; i++) {
        this.listOfNames.push(res[i].name.common);
      }
      this.listOfNames.sort();
    })
  }


  loadCountryData() {
    // reset values
    this.countryName = ''
    this.pendentStatus = false
    this.unMember = false
    this.capital = ''
    this.region = ''
    this.subregion = ''
    this.landArea = ''
    this.latLong = ['']
    this.scale = ''
    this.flag = ''
    this.coatOfArms = ''
    this.cards = false
    this.spinner.show()

    // find selected country
    this.selectedCountry = (<HTMLSelectElement>document.getElementById("country")).value;

    // get overall data from country
    this.apiservice.getCountryData(this.selectedCountry).subscribe(res => {

      for (let i = 0; i < res.length; i++) {
        if (res.length > 0) {
          // display
          this.countryError = false;
          this.cards = true;
          this.spinner.hide();
          // retrieved information
          this.countryName = res[0].name.common
          this.pendentStatus = res[0].independent
          this.unMember = res[0].unMember
          this.capital = res[0].capital
          this.region = res[0].region
          this.subregion = res[0].subregion
          this.landArea = res[0].area
          this.latLong = res[0].latlng
          this.scale = 5;
          this.population = res[0].population;
          this.drivingSide = res[0].car.side
          this.timezone = res[0].timezones[0]
          this.flag = res[0].flags.png
          this.coatOfArms = res[0].coatOfArms.png
          this.weekBegins = res[0].startOfWeek
          this.demonyms = res[0].demonyms.eng.m
          // Check if languages property exists before calling substring
          if (res[0].languages) {
            this.languages = JSON.stringify(res[0].languages).substring(2, 5);
          } else {
            this.languages = 'unknown';
          }
          // Check if gini property exists before calling substring
          if (res[0].gini) {
            this.gini = JSON.stringify(res[0].gini).substring(8, 10);
          } else {
            this.gini = 'unknown';
          }
        } else {
          // display
          this.countryError = true;
          this.cards = false;
          this.spinner.hide();
        }
      }
    });
  }
}
