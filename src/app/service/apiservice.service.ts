import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient,
  ) { }

  getCountryNames(){
    return this.http.get<any>('https://restcountries.com/v3.1/all?fields=name')
  }

  getCountryData( countryName: string){
    return this.http.get<any>('https://restcountries.com/v3.1/name/' + countryName + '?fullText=true')
  }
}
