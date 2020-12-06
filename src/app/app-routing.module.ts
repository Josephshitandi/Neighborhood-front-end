import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessComponent } from '../app/business/business.component';
import {AuthComponent } from '../app/auth/auth.component';
import {NeighborComponent } from '../app/neighbor/neighbor.component';
import {PostComponent } from '../app/post/post.component'

 
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
