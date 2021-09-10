import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Part } from '../models/part.model';

const baseURL = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getAllParts(make?:string): Observable<Part[]> {
    if(make) {
      return this.http.get(baseURL + 'parts/?make=' + make).pipe(map((data:any) => {
        return data.map(x => new Part(x));
      }));
    } else {
      return this.http.get(baseURL + 'parts').pipe(map((data:any) => {
        return data.map(x => new Part(x));
      }));
    }
    
  }

  getSinglePart(id: number): Observable<Part> {
    return this.http.get(baseURL + 'parts/' + id).pipe(map(data => {
      return new Part(data);
    }));
  }

  addNewPart(part: Part): Observable<Part> {
    return this.http.post(baseURL + 'parts', part).pipe(map(data => {
      return new Part(data);
    }));
  }
}
