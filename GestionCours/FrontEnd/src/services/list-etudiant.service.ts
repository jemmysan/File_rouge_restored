import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEnv } from 'src/environments/apiurl-environment';
import { listClassEnv } from 'src/environments/listClasse-environment';
import { inscEnv } from 'src/environments/insc-environments';

@Injectable({
  providedIn: 'root'
})

export class ListEtudiantService {

  apiUrl = apiEnv.apiUrl;
  listClassUri = listClassEnv.uriClassList;
  inscUri = inscEnv.inscUri;


  constructor(private http : HttpClient) { }

  public getListClassById(idClasse : number): Observable<any>
  {
    return this.http.get(this.apiUrl+this.listClassUri+idClasse);
  }


  public inscription(data : any)
  {
    return this.http.post(this.apiUrl+this.inscUri,data);
  }

  // public inscrire()
  // {
  //   return this.http.post<any>()
  // }
}
