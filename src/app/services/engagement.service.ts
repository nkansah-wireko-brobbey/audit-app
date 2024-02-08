import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../core/constants/env';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EngagementService {

  private apiEndpoint = environment.apiUrl+'/engagements';

  constructor(
    private http: HttpClient
  ) { }

  public getAllEngagements(): Observable<any> {
    return this.http.get(this.apiEndpoint);
  }

  public getEngagementById(id: string): Observable<any> {
    return this.http.get(this.apiEndpoint+'/'+id);
  }

  public getEngagementByContractId(id: string): Observable<any> {
    return this.http.get(this.apiEndpoint+'/contract/'+id);
  }

  public getEngagementTeamByEngagementId(id: string): Observable<any> {
    return this.http.get(this.apiEndpoint+'/'+id+'/team');
  }

  public getEngagementBudgetByEngagementId(id: string): Observable<any> {
    return this.http.get(this.apiEndpoint+'/'+id+'/budget');
  }
}
