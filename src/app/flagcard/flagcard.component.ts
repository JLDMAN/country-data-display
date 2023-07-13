import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flagcard',
  templateUrl: './flagcard.component.html',
  styleUrls: ['./flagcard.component.css']
})
export class FlagcardComponent implements OnInit {

  @Input() url: any;

  constructor() { }

  ngOnInit(): void {
  }

}
