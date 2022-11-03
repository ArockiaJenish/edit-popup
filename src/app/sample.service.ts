import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) {}

  private url: string = "https://jsonplaceholder.typicode.com/users";

  getAll(){
    return this.http.get(this.url);
  }
}
