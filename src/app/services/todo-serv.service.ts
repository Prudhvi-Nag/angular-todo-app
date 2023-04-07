import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/dev.environment';

@Injectable({
  providedIn: 'root'
})
export class TodoServService {

  constructor(private http: HttpClient) {

  }
  all() {
    return this.http.get("http://localhost:3007/todos") 
  }
  get(id: any) {
    return this.http.get("http://localhost:3007/todos/"+id)
  }
  create(payload: any) {
    return this.http.post("http://localhost:3007/todos", payload)
  }
  update(payload: any, id: any) {
    return this.http.put("http://localhost:3007/todos/" + id, payload)
  }
  delete(id: any) {
    return this.http.delete("http://localhost:3007/todos/" + id)
  }
}
