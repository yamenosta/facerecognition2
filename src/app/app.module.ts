import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { FaceComponent } from './face/face.component';
import { HttpModule } from '@angular/http';
import { Http,Headers, RequestOptions } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FaceComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,

    
  
  ],
  providers: [
    DataService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
