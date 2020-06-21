import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  baseurl = 'http://175.29.197.27:588/';
  lucidbaseurl='http://lucid.nassa.com.bd/';

  constructor(private http: HttpClient) {

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  post(apiEndpoints, data) {
    return this.http.post(this.baseurl + apiEndpoints, data, this.httpOptions);
  }

  get(apiEndpoints) {
   
  return this.http.get(this.baseurl + apiEndpoints, this.httpOptions);
 
  }
getLucid(apiEndpoints){
  return this.http.get(this.lucidbaseurl + apiEndpoints, this.httpOptions);
}
  
  patch(apiEndpoints, data) {
    console.log(data);
    
    return this.http.patch(this.baseurl + apiEndpoints, data);
  }



}
