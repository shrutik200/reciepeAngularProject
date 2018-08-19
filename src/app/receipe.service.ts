import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {

  constructor( private http:  HttpClient) { }

  public getAllTodos(){
    return  this.http.get("http://localhost:3000/receipeArray")
   }

    UpdateList(data){
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })
     };
     return this.http.post("http://localhost:3000/receipeArray", data)
    }

    updateReceipe(data){debugger
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.put("http://localhost:3000/receipeArray/" +data.id_number , data)
    }
}
