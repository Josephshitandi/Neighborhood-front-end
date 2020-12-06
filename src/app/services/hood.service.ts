import { Injectable } from '@angular/core';
import {Neighborhood} from '../models/neighborhood';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tap, catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HoodService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token 453d5bf4b8a7d3b237807828572598d4484b1445"});
  hood:Neighborhood


  constructor(private http:HttpClient) { }

  createNeighborhood(hood): Observable<any> {
    return this.http.post('https://shitandi-neighborhood.herokuapp.com' + '/api/v1/Neighborhood/', hood,
    {headers: this.httpHeaders})
  }


  getHoodList():Observable<any>{
    interface ApiResponse{
      name:string
      location:string
      admin:number
    }
    return this.http.get<ApiResponse>('https://shitandi-neighborhood.herokuapp.com/api/v1/Neighborhood/');
  }

  AddUser(user): Observable<any> {
    return this.http.post('https://shitandi-neighborhood.herokuapp.com' + '/auth/signup/', user,
    {headers: this.httpHeaders})
  }
}