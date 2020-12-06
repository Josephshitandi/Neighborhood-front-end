import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token 453d5bf4b8a7d3b237807828572598d4484b1445"});
  


  constructor(private http:HttpClient) { }

  login(user): Observable<any> {
    return this.http.post('https://shitandi-neighborhood.herokuapp.com' + '/auth/login/', user,
    {headers: this.httpHeaders})
  }
}
