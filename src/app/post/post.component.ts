import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() post1:any;
  @Output() onDeletePost: EventEmitter<any> = new EventEmitter() ;

  constructor (private postService:PostService) {}

  ngOnInit(): void{

  }

  onDelete(){
   this.onDeletePost.emit(this.post1);
  }

}
