import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Part } from '../models/part.model';

const baseURL = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getAllParts(): Observable<Part[]> {
    return this.http.get(baseURL + 'parts').pipe(map((data:any) => {
      return data.map(x => new Part(x));
    }))
  }
}
