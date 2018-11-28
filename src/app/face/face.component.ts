import { Component, Input,  OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent  {
   imageUrl: string;
   personAge;
 
   
  constructor( private data: DataService) {
    this.imageUrl='';
   }
 getPersonAge(imageUrl: string){
   this.data.getPersonAge(imageUrl).subscribe(
     data=>{this.personAge = data.json(); 
         
    } )   

    
    }
 }
 

 


