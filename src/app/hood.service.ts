import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Neighborhood} from './neighborhood';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoodService {
  hood:Neighborhood


  constructor(private http:HttpClient) { }


  getHoodList():Observable<any>{
    interface ApiResponse{
      name:string
      location:string
      admin:number
    }
    return this.http.get<ApiResponse>('https://shitandi-neighborhood.herokuapp.com/Neighborhood/');
  }
}