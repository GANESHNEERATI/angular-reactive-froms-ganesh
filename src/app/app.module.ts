import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from   './app.component';

import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileWithAddressComponent } from './profile-with-address/profile-with-address.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, NameEditorComponent, ProfileEditorComponent, ProfileWithAddressComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
