import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl='http://localhost:9595/'

  token=localStorage.getItem('token')
  constructor(private http:HttpClient) { }

  getUsers()
  {
    console.log(this.token);
    let headers=new HttpHeaders().set('Authorization',`Bearer ${this.token}`)
    return this.http.get(`${this.baseUrl}getusers`,{headers,responseType:'text' as 'json'});
    // return this.http.get(`${this.baseUrl}/getusers`)
  }
}
