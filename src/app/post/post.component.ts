import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Post} from '../models/post'
import {HttpClient} from '@angular/common/http';
import { PostService} from '../services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts = [];
  http;
  error: any;
  post;


  constructor(private postservice: PostService, http:HttpClient) {
    this.http = http;
   }

   addPost() {
   
   this.postservice.createPost(this.post).subscribe(
    response => {
      alert('Post ' +  ' has been submitted succesfully')
    },
    error => console.log('error', error)
  )
  
  }


  ngOnInit(): void {
    this.post = {title:"",user:"",neighbourhood:"",text:"",image:""}
    this.postservice.getPost().subscribe((res: Response) => {
      console.log(res)
      Object.entries(res).forEach(result => {
      const [_, value] = result;
       let title = value['title'];
       let user = value['user'];
       let neighbourhood = value['neighbourhood'];
       let text = value['text'];
       let image = value['image'];
       let hoodObject = new Post(title,user,neighbourhood,text,image)
       this.posts.push(hoodObject)
      });
    });
  }
}