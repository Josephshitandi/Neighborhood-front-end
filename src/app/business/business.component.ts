import { Component, OnInit } from '@angular/core';
import { Businessclass } from '../businessclass';
import { BusinessService } from '../business.service';
import { HttpClient } from '@angular/common/http';
// import {environment} from '../../environments/environment';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  business: Businessclass;
  businesses = [];
  http;

  constructor(private businessservice: BusinessService,http:HttpClient) {
    this.http = http;
   }

  ngOnInit(): void {
    this.businessservice.getBusinessList().subscribe((res:Response) => {
      console.log(res)
      Object.entries(res).forEach(result=>{
        const[_,value] = result;
        let business_name = value ['business_name'];
        let user = value ['user'];
        let neighbourhood = ['neighbourhood'];
        let business_email = ['business_email'];
        let businessObject = new Businessclass(business_name,user,neighbourhood,business_email)
        this.businesses.push(businessObject)
      });
    })
  }
}
