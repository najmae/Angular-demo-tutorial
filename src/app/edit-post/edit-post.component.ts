import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
id?:number;
title?:string;
content?:string;

constructor(private postService:PostService, private route: ActivatedRoute, private router:Router){}


ngOnInit():void{
 this.route.params.subscribe((parameters) => this.postService.getPost(parameters['id']).subscribe((retrivedPost)=>{
  this.id=retrivedPost.id,
  this.title=retrivedPost.title,
  this.content=retrivedPost.content
 }));
}

onSubmit(){
  const updatedPost={
    id:this.id,
    title:this.title,
    content:this.content,
  }
  this.postService.updatePost(updatedPost).subscribe(() => this.router.navigate(['/blog']));
}


}
