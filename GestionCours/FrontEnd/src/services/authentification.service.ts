import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEnv } from 'src/environments/apiurl-environment';
import { apiAuth } from 'src/environments/auth-environment';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  apiUrl = apiEnv.apiUrl;
  uriLogin = apiAuth.uriLogin;

  constructor(private http : HttpClient ) { }


  public login(loginInfos : any ) : Observable<any>{
    return this.http.post(this.apiUrl+this.uriLogin,loginInfos)
  }
}
