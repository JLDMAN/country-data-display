import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,    
    SectioncardComponent, 
    FlagcardComponent, 
    CoatofarmscardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
