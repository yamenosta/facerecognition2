import { Component, Input,  OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {
   imageUrl: string="http://storage.news.nowmedia.co.za/medialibrary/Article/176965/Roommatik-tests-facial-recognition-to-streamline-hotel-check-in-800x400.jpg";
   personAge;
   age:boolean; 
   gender:boolean;
   headPose:boolean;
   smile:boolean;
   facialHair:boolean;
   glasses:boolean;
   emotion:boolean;
   hair:boolean;
   makeup:boolean;
   occlusion:boolean;
   accessories:boolean;
   blur:boolean;
   exposure:boolean;
   noise:boolean;
   opt:string;
   droprect:Boolean =false;
   widthImg;
   heightImg;
   recTop:string;
   recLeft:string;
   recW:string;
   recH:string;
   rectangleInfos: object[]
  constructor( private data: DataService) {
    
   
   }

   handleImageLoad(event): void {
    this.widthImg = event.target.width;
    this.heightImg = event.target.height;
    console.log(this.widthImg);
    console.log(this.heightImg);
  }
 ngOnInit(){
  this.opt='age';
  this.droprect= false;
  var image = new Image();
  image.src = this.imageUrl;
  image.addEventListener('load', (e) => this.handleImageLoad(e));
  
 }

   
 getPersonAge(imageUrl: string, opt:string){
   
  var image = new Image();
  this.droprect=true;
  image.src = this.imageUrl;
  image.addEventListener('load', (e) => {this.handleImageLoad(e)}  );
  
  
  
  
  
  if(this.gender==true){ this.opt=this.opt +',gender'; }
  if(this.headPose==true){ this.opt=this.opt +',headPose'; }
  if(this.smile==true){ this.opt=this.opt +',smile'; }
  if(this.facialHair==true){ this.opt=this.opt +',facialHair'; }
  if(this.glasses==true){ this.opt=this.opt +',glasses'; }
  if(this.emotion==true){ this.opt=this.opt +',emotion'; }
  if(this.hair==true){ this.opt=this.opt +',hair'; }
  if(this.makeup==true){ this.opt=this.opt +',makeup'; }
  if(this.occlusion==true){ this.opt=this.opt +',occlusion'; }
  if(this.accessories==true){ this.opt=this.opt +',accessories'; }
  if(this.blur==true){ this.opt=this.opt +',blur'; }
  if(this.exposure==true){ this.opt=this.opt +',exposure'; }
  if(this.noise==true){ this.opt=this.opt +',noise'; }
  
   this.data.getPersonAge(imageUrl, opt).subscribe(
     data=>{this.personAge = data.json(); 
     
     
    } )  

    }
    getrecTop(recTop){
      return(recTop=''+((recTop/this.heightImg)*100)+'%');

    }
    getrecLeft(recLeft){
      return(recLeft='' +((recLeft/this.widthImg)*100)+'%');
    }
    getrecW(recW){
      return(recW='' +((recW/this.widthImg)*100)+'%');
    
    }
    getrecH(recH){
      return(recH='' +((recH/this.heightImg)*100)+'%');
      
    }
    
 }
 

 


