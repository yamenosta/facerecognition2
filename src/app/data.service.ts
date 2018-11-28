import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';

import { map } from "rxjs/operators";


 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url='https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?FaceId=true&returnFaceAttributes=gender,age,smile';

  constructor(private http: Http) { }
  getPersonAge(imageUrl: string){
     const headers= new Headers
     ({
       'Content-Type':'application/json',
       'Ocp-Apim-Subscription-Key':'ed7023b9925a42c9b98a3f8bb8509ff8'
     });
    const options = new RequestOptions({headers});
    return this.http.post(this.url,{url : imageUrl},options)
          
            
             
           ;
         
}
}
