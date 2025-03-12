import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getProductById(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get('https://dummyjson.com/users')
  }
  // getDetailsById(id:string){
  //   return this.http.get('https://dummyjson.com/users'+id)
  // }
  getDetailsById(id: string) {
    return this.http.get('https://dummyjson.com/users/' + id);
  }
    
}
