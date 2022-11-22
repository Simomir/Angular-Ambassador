import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint = `${environment.api}/products`;

  constructor(private http: HttpClient) { }

  backend(filters?: {page?: number}): Observable<{data: Product[]}> {
    let params = new HttpParams();

    if(filters?.page) {
      params = params.set('page', filters.page)
    }

    return this.http.get<{data: Product[]}>(`${this.endpoint}/backend`, {params});
  }

}
