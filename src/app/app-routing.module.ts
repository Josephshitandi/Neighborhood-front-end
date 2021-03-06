import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessComponent } from '../app/business/business.component';
import {AuthComponent } from '../app/auth/auth.component';
import {NeighborComponent } from '../app/neighbor/neighbor.component';
import {PostComponent } from '../app/post/post.component';
import {HomeComponent } from '../app/home/home.component';
import {AboutComponent } from '../app/about/about.component'

 
const routes: Routes = [
  {path: 'business', component: BusinessComponent},
  {path: 'login', component: AuthComponent},
  {path: 'hood', component: NeighborComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'posts', component: PostComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
