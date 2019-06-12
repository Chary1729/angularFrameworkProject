import { Component } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = ' uday';
  myData=[
    {
      "name":"person1",
      "age":23,
      "email":"djfkd@gmail.com"
      },
       {
      "name":"person2",
      "age":23,
      "email":"djfkd@gmail.com"
      }
  ]
  userForm; 
  constructor()
  {
    this.userForm=new FormGroup({
      "name":new FormControl(),
      "age":new FormControl(),
      "email":new FormControl()
    })
  }
  formSubmit()
  {
    this.myData.push(this.userForm.value)
  }

  }
 

  


