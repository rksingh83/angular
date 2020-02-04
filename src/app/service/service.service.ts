import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  CommonService {

  constructor(private http:HttpClient) { 
         
  }

  public getData(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts')
          
       
  }
}
