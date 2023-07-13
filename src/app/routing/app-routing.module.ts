import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SectioncardComponent } from '../sectioncard/sectioncard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'sectioncard', component: SectioncardComponent}
  ];

@NgModule({
  imports:[
    RouterModule.forRoot(routes, { enableTracing: true, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
