import { Injectable } from '@angular/core';
import {Neighborhood} from './neighborhood';
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

  createNeighborhood(name: string, location: string, admin: any) {
    return this.http.post('https://shitandi-neighborhood.herokuapp.com/api/v1/Neighborhood/', { name, location, admin, headers:this.httpHeaders }).pipe(
      tap((response) => {
        console.log('createNeighborhood response ', response);
      }),
      shareReplay()
    );
  }


  // createNeighborhood(name: string, location: string, admin: any):Observable<any>{
  //   interface ApiResponse{
  //     name:string
  //     location:string
  //     admin:number
  //   }
  //   return this.http.get<ApiResponse>('https://shitandi-neighborhood.herokuapp.com/Neighborhood/', { location, admin});
  // }


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