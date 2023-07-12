import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
// routing modules
import { AppRoutingModule } from '../app/routing/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SinglecardComponent } from './singlecard/singlecard.component';
import { DoublecardComponent } from './doublecard/doublecard.component';
// style modules

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SinglecardComponent,
    DoublecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
