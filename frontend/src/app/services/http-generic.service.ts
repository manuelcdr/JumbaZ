import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpGenericService {

  private initialized = false;
  private url = `${environment.API.url}`;
  private urlPath = '';
  private urlCombined = '';

  constructor(private httpClient: HttpClient) { }

  initialize(path: string){
    this.urlPath = path;
    this.urlCombined = `${this.url}/${this.urlPath}`;
    this.initialized = true;
  }

  getOne(id: string): Observable<any> {
    if (!this.initialized) { return; }
    return this.httpClient.get(`${this.urlCombined}/${id}`)
      .pipe(
        map<ApiResponse, any>(response => response.data)
      );
  }

  list(): Observable<any[]> {
    if (!this.initialized) { return; }
    return this.httpClient.get(this.urlCombined)
      .pipe(
        map<ApiResponse, any[]>(response => response.data)
      );
  }

  create(obj: any): Observable<ApiResponse> {
    if (!this.initialized) { return; }
    return this.httpClient.post<ApiResponse>(this.urlCombined, obj);
  }

  update(id: string, obj: any): Observable<ApiResponse> {
    if (!this.initialized) { return; }
    return this.httpClient.put<ApiResponse>(`${this.urlCombined}/${id}`, obj);
  }

  delete(id: string): Observable<ApiResponse> {
    if (!this.initialized) { return; }
    return this.httpClient.delete<any>(`${this.urlCombined}/${id}`);
  }
}
