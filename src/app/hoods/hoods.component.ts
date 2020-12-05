import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Neighborhood } from '../neighborhood'
import { ActivatedRoute } from '@angular/router';
import {NeighborhoodServiceService } from '../neighborhood/neighborhood-service.service'

@Component({
  selector: 'app-hoods',
  templateUrl: './hoods.component.html',
  styleUrls: ['./hoods.component.css']
})
export class HoodsComponent implements OnInit {
  neighborhoods: Neighborhood[];
  error: any;
  newneighborhoods: Neighborhood[];

  addNeighborhood(name: string, location: string, admin: any) {
    console.log('name, location, admin ', name, location, admin);

    this.neighborhoodService.createNeighborhood(name, location, admin).subscribe(
      (success) => {
        alert('hood create success');
      },
      (error) => ((this.error = error), alert('hood create error'))
    );
  }

  // getNeighborhoods(): void {
  //   this.neighborhoodService.getNeighborhoods().subscribe((data: Neighborhood[]) => {
  //     this.neighborhoods = data;
  //     console.log('this.neighborhoods', this.neighborhoods);
  //   });
  // }

  constructor(
    // public logoutService: LogoutService,
    private neighborhoodService: NeighborhoodServiceService,
    private _route: ActivatedRoute
  ) {}

  // ngOnInit(): void {
  //   this.neighborhoods = this._route.snapshot.data.resolvedNeighborhoods || [];

  //   // this.logoutService.currentlogoutState.subscribe((logoutData) => {
  //   //   console.log('logoutData ', logoutData);
  //   // });

  //   // this.getTodos();
  // }

  ngOnInit(): void {
    this.neighborhoodService.getNeighborhoods()
      .subscribe((response:any)=>{
      this.neighborhoods=response.data;
    });
  }



}

