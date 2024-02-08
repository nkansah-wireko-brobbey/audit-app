import { Injectable } from '@angular/core';
import { environment } from '../core/constants/env';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private apiEndpoint = environment.apiUrl+'/contracts';

  constructor(
    private http: HttpClient
  ) { 

  }

  public createContract(data: FormData): Observable<any> {
    return this.http.post(this.apiEndpoint, data);
  }
  public getAllContractsClientById(id: string): Observable<any> {
    return this.http.get(this.apiEndpoint+'/'+id);
  }

  public getAllContracts(): Observable<any> {
    return this.http.get(this.apiEndpoint);
  }
}
