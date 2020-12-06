import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Post} from '../models/post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
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
    this.hoodservice.getPosts().subscribe((res: Response) => {
      console.log(res)
      Object.entries(res).forEach(result => {
      const [_, value] = result;
       let title = value['title'];
       let user = value['user'];
       let neighbourhood = value['neighbourhood'];
       let text = value['text'];
       let image = value['image'];
       let hoodObject = new Post(title,user,neighbourhood,text,image)
       this.hoods.push(hoodObject)
      });
    });
  }
}