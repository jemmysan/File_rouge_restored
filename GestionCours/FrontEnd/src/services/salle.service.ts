import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEnv } from 'src/environments/apiurl-environment';
import { sallEnv } from 'src/environments/salle-environment';
import { ResponseCours } from 'src/interfaces/response-cours';


@Injectable({
  providedIn: 'root'
})

export class SalleService {

  apiUrl : string = apiEnv.apiUrl;
  salleUri : string = sallEnv.salleUri;
  uriSalle : string = sallEnv.allSalleUri
  

  constructor(private http : HttpClient) { }

  public salleContClass(tSalle : any) : Observable<any>
  {
     return this.http.get(this.apiUrl+this.salleUri+tSalle)
  }

  public getSallSession() : Observable<any>{
    return this.http.get<ResponseCours>(this.apiUrl+this.salleUri+this.uriSalle)
  }
}
