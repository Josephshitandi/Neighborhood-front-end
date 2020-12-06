import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BusinessService } from '../services/business.service';
import { Business } from '../models/business'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businesss = [];
  http;
  error: any;
  business;


  constructor(private bservice: BusinessService, http:HttpClient) {
    this.http = http;
   }

   addBusiness() {
   
   this.bservice.createBusiness(this.business).subscribe(
    response => {
      alert('Business' +  ' has been created successfully')
    },
    error => console.log('error', error)
  )
  
  }


  ngOnInit(): void {
    this.business = {business_name:"",user:"",neighborhood:"",business_email:"",business_profile:"" }
    this.bservice.getBusiness().subscribe((res: Response) => {
      console.log(res)
      Object.entries(res).forEach(result => {
      const [_, value] = result;
       let business_name = value['business_name'];
       let user = value['user'];
       let neighbourhood = value['neighbourhood'];
       let business_email = value['business_email'];
       let business_profile = value['business_profile'];
       let businessObject = new Business(business_name,user,neighbourhood,business_email,business_profile)
       this.businesss.push(businessObject)
      });
    });
  }
}
