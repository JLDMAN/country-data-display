import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectioncard',
  templateUrl: './sectioncard.component.html',
  styleUrls: ['./sectioncard.component.css']
})
export class SectioncardComponent implements OnInit {

  @Input() cardTitle: any;
  @Input() values: any[] = [];
  @Input() lables: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
