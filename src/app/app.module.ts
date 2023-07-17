import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// routing modules
import { AppRoutingModule } from '../app/routing/app-routing.module';
// import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SectioncardComponent } from './sectioncard/sectioncard.component';
import { FlagcardComponent } from './flagcard/flagcard.component';
import { CoatofarmscardComponent } from './coatofarmscard/coatofarmscard.component';
// Import library/style modules
import { NgxSpinnerModule } from "ngx-spinner";
import { MapComponent } from './map/map.component';
import { ThemeswitchComponent } from './themeswitch/themeswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,    
    SectioncardComponent, 
    FlagcardComponent, 
    CoatofarmscardComponent, MapComponent, ThemeswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
