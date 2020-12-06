import { Injectable } from '@angular/core';
import { Business } from '../models/business';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token 453d5bf4b8a7d3b237807828572598d4484b1445"});
  business:Business


  constructor(private http:HttpClient) { }

  createBusiness(business): Observable<any> {
    return this.http.post('https://shitandi-neighborhood.herokuapp.com/api/v1/Business/', business,
    {headers: this.httpHeaders})
  }


  getBusiness():Observable<any>{
    interface ApiResponse{
      business_name:string
      user:number
      neighbourhood:number
      business_email:string
      business_profile: string
    }
    return this.http.get<ApiResponse>('https://shitandi-neighborhood.herokuapp.com/api/v1/Business/');
  }

  
}