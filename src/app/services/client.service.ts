import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../core/constants/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiEndpoint = environment.apiUrl+'/clients';

  constructor(private http: HttpClient) { 
  }

  public getCLients(): Observable<any> {
    return this.http.get(this.apiEndpoint);
  }

  public createClient(data: any): Observable<any> {
    return this.http.post(this.apiEndpoint, data);
  }

  public gerClientById(id: string): Observable<any> {
    return this.http.get(this.apiEndpoint+'/'+id);
  }
}
