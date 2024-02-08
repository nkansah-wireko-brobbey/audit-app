import { Injectable } from '@angular/core';
import { environment } from '../../core/constants/env';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // Define the API endpoint
  private apiEndpoint = environment.apiUrl;

  private _apiUrl = this.apiEndpoint+'/ui-configs';
  constructor(private http: HttpClient) { }

  // Define the method to get the API endpoint

  public get apiUrl(): Observable<any> {
    return this.http.get(this._apiUrl);
  }
}
