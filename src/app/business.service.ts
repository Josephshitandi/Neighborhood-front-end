// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BusinessService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Businessclass} from './ businessclass'
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class BusinessService {
  business:Businessclass

  constructor() { }
}
export class HoodService {
  hood:Hoodclass


  constructor(private http:HttpClient) { }


  getBusinessList():Observable<any>{
    interface ApiResponse{
      business_name:string
      user:string
      neighbourhood:string
      business_email:string
    }
    return this.http.get<ApiResponse>(environment.  businessEndpoint);
  }
}
