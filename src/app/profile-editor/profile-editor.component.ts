import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm=new FormGroup({
    first_name:new FormControl(''),
    last_name:new  FormControl(''),
    address:new FormGroup({


      
    })
  }


  );

  onSubmit()
  {
    console.warn(this.profileForm.value);
  }



  constructor() { }

  ngOnInit() {
  }

}