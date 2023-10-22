import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEnv } from 'src/environments/apiurl-environment';
import { ResponseCours } from 'src/interfaces/response-cours';
import { attacheEnv } from 'src/environments/attache-environment';

@Injectable({
  providedIn: 'root'
})
export class AttacheService {

  apiUrl = apiEnv.apiUrl;
  uriList = attacheEnv.uriListD;
  uriTraiteDmd = attacheEnv.uriTraiteDmd;

  constructor(private http : HttpClient) { }

  public listDemande(): Observable<ResponseCours>{
    return this.http.get<ResponseCours>(this.apiUrl+this.uriList);
  }

  public traiteDemande(idDmd : number , etat : number) {
    return this.http.post(this.apiUrl+this.uriTraiteDmd,{idDmd,etat});
  }
}
