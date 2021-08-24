import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import * as _ from 'underscore';

@Injectable({providedIn:'root'})
export class AppDataResource {
  private apiRoot: string = "http://localhost:3000/contacts";
  constructor(private http: HttpClient) {}


  query(params: { [key: string]: string }): Observable<any[]> {
    return this.http.get<any[]>(this.apiRoot, { params });
  }

  get(id:any, params?: { [key: string]: string }): Observable<any> {
    return this.http.get<any>(this.apiRoot + '/' + id, { params });
  }

  save(data: any) {
    return this.http.post(this.apiRoot, data);
  }

  update(data: any) {
    return this.http.put(this.apiRoot + '/' + data.id, data);
  }

  remove(data: any) {
    return this.http.delete(this.apiRoot + '/' + data.id);
  }
}
