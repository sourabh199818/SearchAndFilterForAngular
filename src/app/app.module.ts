import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import {UserRegistrationService} from './user-registration.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
