import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { PaginatedProducts } from "../interfaces/paginated-products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint = `${environment.api}/products`;

  constructor(private http: HttpClient) { }

  backend(filters?: {page?: number}): Observable<PaginatedProducts> {
    let params = new HttpParams();

    if(filters?.page) {
      params = params.set('page', filters.page)
    }

    return this.http.get<PaginatedProducts>(`${this.endpoint}/backend`, {params});
  }

}
