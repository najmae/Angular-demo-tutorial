import { Component, Input } from '@angular/core';
import { PostService } from '../services/post.service';
//import { Posts } from '../mock-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts :any;

  @Input() colClass:any;

  constructor (private postService:PostService) {}

  ngOnInit(): void{
   this.postService.getPosts().subscribe((retrivedData) => this.posts = retrivedData);
  }

  deletePost(post:any){
    this.postService.deletePost(post.id).subscribe(() => this.posts = this.posts.filter((p:any) => p.id != post.id));
   }

}
