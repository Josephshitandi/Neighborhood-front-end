import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Neighborhood} from '../neighborhood'
import { Observable } from 'rxjs';
import { HoodService } from '../hood.service';

@Component({
  selector: 'app-neighbor',
  templateUrl: './neighbor.component.html',
  styleUrls: ['./neighbor.component.css']
})
export class NeighborComponent implements OnInit {
  // hood: Neighborhood;
  hoods = [];
  http;


  constructor(private hoodservice: HoodService, http:HttpClient) {
    this.http = http;
   }

  ngOnInit(): void {
    this.hoodservice.getHoodList().subscribe((res: Response) => {
      console.log(res)
      Object.entries(res).forEach(result => {
      const [_, value] = result;
       let name = value['name'];
       let location = value['location'];
       let admin = value['admin'];
       let hoodObject = new Neighborhood(name,location,admin)
       this.hoods.push(hoodObject)
      });
    });
  }
}