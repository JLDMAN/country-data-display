import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themeswitch',
  templateUrl: './themeswitch.component.html',
  styleUrls: ['./themeswitch.component.css']
})
export class ThemeswitchComponent implements OnInit {
  light: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  selectTheme() {
    this.light = !this.light;
    this.applyTheme();
    console.log("theme clicked");
  }

  private applyTheme() {
    if (!this.light) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }
}