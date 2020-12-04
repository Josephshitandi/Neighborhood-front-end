import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoodsComponent } from './hoods/hoods.component';
import { NeighborComponent } from './neighbor/neighbor.component';

@NgModule({
  declarations: [
    AppComponent,
    HoodsComponent,
    NeighborComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
