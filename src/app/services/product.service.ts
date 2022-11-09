import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint = `${environment.api}/products`;

  constructor(private http: HttpClient) { }

}
