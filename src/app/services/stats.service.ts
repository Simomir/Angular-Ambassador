import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Link } from "../interfaces/link";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  stats(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.api}/stats`);
  }
}
