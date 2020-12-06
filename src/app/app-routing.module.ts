import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from '../app/about/about.component'
import {BusinessComponent} from '../app/business/business.component'
 
const routes: Routes = [
{path: 'about', component: AboutComponent },
{path: 'business', component: BusinessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
