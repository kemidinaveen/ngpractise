import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  addperson(person:Person):Observable<any>{
    const headers = {'content-type':'application/json'}
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL+'1',body,{'headers':headers})
    
  }
  }

