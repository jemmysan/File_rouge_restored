import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEnv } from 'src/environments/apiurl-environment';
import { coursEnv } from 'src/environments/cours-environment';
import { ResponseCours } from 'src/interfaces/response-cours';

@Injectable({
  providedIn: 'root'
})

export class ProfService {

  apiUrl : string = apiEnv.apiUrl;
  uriCoursProf : string = coursEnv.uriCoursProf;
  uriSessionCoursProf : string = coursEnv.uriSessionCoursProf;
  uriAnnule : string = coursEnv.uriAnnuleSessionCours;

  constructor(private http : HttpClient ) { }

  public getProfCours(idProf : number): Observable<ResponseCours>
  {
    return this.http.get<ResponseCours>(this.apiUrl+this.uriCoursProf+idProf);
  }


  public getSessionCoursProf(idCours : number) : Observable<ResponseCours>
  {
    return this.http.get<ResponseCours>(this.apiUrl+this.uriSessionCoursProf+idCours);
  }

  public annuleSession(id: number , motif : string) 
  {
    return this.http.post(this.apiUrl+this.uriAnnule,{id,motif})
  }

}
