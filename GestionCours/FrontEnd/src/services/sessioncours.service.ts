import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiEnv } from 'src/environments/apiurl-environment';
import { coursEnv } from 'src/environments/cours-environment';
import { ResponseCours } from 'src/interfaces/response-cours';

@Injectable({
  providedIn: 'root'
})

export class SessioncoursService {
  apiUrl = apiEnv.apiUrl;
  uriSession = coursEnv.uriSession;
  uriAddSession  = coursEnv.uriAddSession;


  constructor(private http : HttpClient){}

  public ajoutSession(session : any) : Observable<any>
  {
      return this.http.post(this.apiUrl+this.uriAddSession,session)
  }

}
