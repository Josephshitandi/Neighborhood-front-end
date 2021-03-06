import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError, shareReplay } from 'rxjs/operators';
import { Neighborhood } from '../models/neighborhood';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodServiceService {
  private apiRoot = 'https://shitandi-neighborhood.herokuapp.com/api/v1/Neighborhood/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token 453d5bf4b8a7d3b237807828572598d4484b1445"});

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Neighborhood: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Neighborhood: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  createNeighborhood(name: string, location: string, admin: any) {
    return this.http.post(this.apiRoot, { name, location, admin},{ headers:this.httpHeaders }).pipe(
      tap((response) => {
        console.log('createNeighborhood response ', response);
      }),
      shareReplay()
    );
  }


  getNeighborhoods(): Observable<Neighborhood[]> {
    return this.http.get<Neighborhood[]>(this.apiRoot,{headers:this.httpHeaders}).pipe(
      tap((_) => {
        console.log('fetched Neighborhoods');
      }),
      catchError(this.handleError<Neighborhood[]>('', []))
    );
  }

  // getNeighborhoods(){
  //  let results = this.http.get(this.apiRoot,{headers:this.httpHeaders});
  //  console.log("My results",results)
  //   return results;
  // }
}
