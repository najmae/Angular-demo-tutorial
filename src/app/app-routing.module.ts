import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "blog",
    component : BlogComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "blog/create",
    component : AddPostComponent
  },
  {
    path : "blog/edit/:id",
    component : EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
