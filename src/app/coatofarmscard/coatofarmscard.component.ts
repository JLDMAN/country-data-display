import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coatofarmscard',
  templateUrl: './coatofarmscard.component.html',
  styleUrls: ['./coatofarmscard.component.css']
})
export class CoatofarmscardComponent implements OnInit {

  @Input() url: any;

  constructor() { }

  ngOnInit(): void {
  }

}
