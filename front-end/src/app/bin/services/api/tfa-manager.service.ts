import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TfaManagerService {

  private API_URL = environment.Homework.apiUrl;

  constructor(private _http: HttpClient) { }

  public create(packet: any): Observable<any>{
    return this._http.post<any>(this.API_URL + '/api/v2/post/2fa/setup', packet);
  }

  public delete(packet: any): Observable<any>{
    return this._http.post<any>(this.API_URL + '/api/v2/post/2fa/disable', packet);
  }

  public verify(packet: any): Observable<any>{
    return this._http.post<any>(this.API_URL + '/api/v2/post/2fa/verify', packet);
  }

  public verify_login(packet: any): Observable<any>{
    return this._http.post<any>(this.API_URL + '/api/v2/post/2fa/verify/login', packet);
  }

  public active(packet: any): Observable<any>{
    return this._http.post<any>(this.API_URL + '/api/v2/post/2fa/active', packet);
  }
}
