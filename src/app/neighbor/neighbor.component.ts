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
  error: any;


  constructor(private hoodservice: HoodService, http:HttpClient) {
    this.http = http;
   }

   addNeighborhood(name: string, location: string, admin: any) {
    console.log('name, location, admin ', name, location, admin);

    this.hoodservice.createNeighborhood(name, location, admin).subscribe(
      (success) => {
        alert('hood create success');
      },
      (error) => ((this.error = error), alert('hood create error'))
    );
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