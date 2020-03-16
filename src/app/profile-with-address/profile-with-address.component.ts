import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile-with-address',
  templateUrl: './profile-with-address.component.html',
  styleUrls: ['./profile-with-address.component.css']
})
export class ProfileWithAddressComponent implements OnInit {

  profileForm=new FormGroup({
    first_name:new FormControl(''),
    last_namea:new FormControl(''),
    address:new FormGroup({
      street:new FormControl(' '),
      city:new FormControl(' '),
      state:new FormControl(' '),
      zip:new FormControl(' '),




    }),
    



  });

  constructor() { }

  ngOnInit() {
  }

}