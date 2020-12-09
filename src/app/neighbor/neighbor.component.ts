import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Neighborhood} from '../models/neighborhood'
import { Observable } from 'rxjs';
import { HoodService } from '../services/hood.service';

@Component({
  selector: 'app-neighbor',
  templateUrl: './neighbor.component.html',
  styleUrls: ['./neighbor.component.css']
})
export class NeighborComponent implements OnInit {
  hoods = [];
  http;
  error: any;
  hood;


  constructor(private hoodservice: HoodService, http:HttpClient) {
    this.http = http;
   }

   addNeighborhood() {
   
   this.hoodservice.createNeighborhood(this.hood).subscribe(
    response => {
      alert('Neighborhood ' +  ' has been created')
    },
    error => console.log('error', error)
  )
  
  }


  ngOnInit(): void {
    this.hood = {name:"",location:"",admin:""}
    this.hoodservice.getHoodList().subscribe((res: Response) => {
      console.log(res)
      Object.entries(res).forEach(result => {
      const [_, value] = result;
       let name = value['name'];
       let location = value['location'];
       let admin = value['admin'];
       let image = value['image'];
       let count = value['occupantCount'];
       let hoodObject = new Neighborhood(name,image,location,admin,count)
       this.hoods.push(hoodObject)
      });
    });
  }
}