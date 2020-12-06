import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token 453d5bf4b8a7d3b237807828572598d4484b1445"});
  post:Post


  constructor(private http:HttpClient) { }

  createPost(post): Observable<any> {
    return this.http.post('https://shitandi-neighborhood.herokuapp.com' + '/api/v1/Post/', post,
    {headers: this.httpHeaders})
  }


  getPost():Observable<any>{
    interface ApiResponse{
      title:string
      user:number
      neighbourhood:number
      text: string
      image: string

    }
    return this.http.get<ApiResponse>('https://shitandi-neighborhood.herokuapp.com/api/v1/Post/');
  }

}