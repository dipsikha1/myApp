import { Component } from '@angular/core';
import {PostsService} from '../services/post.service';
@Component({
  moduleId : module.id, // to use relative path, gives editor error but its fine
  selector: 'user',
  templateUrl:'user.component.html', // to access the html
  providers :[PostsService]
})
export class UserComponent  {
  name: string;
email: string;
address: address;
hobbies: string[];
showHobbies: boolean;
posts: Post[];

constructor (private postsService: PostsService){
this.name = 'John Doe';
this.email = 'john@gmail.com';
this.address =  {
street: '12 Main St',
city: 'Boston',
state: 'MA'
}

this.hobbies = ['Music', 'Movies', 'Sports'];
this.showHobbies= false;

this.postsService.getPosts().subscribe(posts =>{ //needs to subscribe to returned observable
this.posts = posts;
});
}
toggleHobbies(){
  if (this.showHobbies == true){
    this.showHobbies = false;
  }
  else{
  this.showHobbies = true;
}
}
addHobby(hobby:any){
this.hobbies.push(hobby);

}
deleteHobby(i: any){
  this.hobbies.splice(i, 1);
}
 }
 interface address {
   street: string;
   city: string;
   state:string;
 }
 interface Post {
   id: number;
   title: string;
   body: string;

 }
