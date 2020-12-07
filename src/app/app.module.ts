import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from '../app/user/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    UserComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }