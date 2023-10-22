import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { apiEnv } from 'src/environments/apiurl-environment';
import { ResponseCours } from 'src/interfaces/response-cours';
import { FormGroup } from '@angular/forms';
import { coursEnv } from 'src/environments/cours-environment';


@Injectable({
  providedIn: 'root'
})

export class CoursplanningService {
  apiUrl: string = apiEnv.apiUrl;
  uriCours: string = coursEnv.uriCours;
  uriAddCours : string = coursEnv.uriAddCours;
  listCours : string = coursEnv.uriListCours;
  uriSession : string = coursEnv.uriSession;
  uriSalle : string = 'salle/all'

  constructor(private http : HttpClient) {}

  public getCoursComponents(): Observable<ResponseCours>{
    return this.http.get<ResponseCours>(this.apiUrl+this.uriCours)
  }

  public planifierCours(cours :any):Observable<any>{
    return this.http.post(this.apiUrl+this.uriAddCours,cours);
  }

  public listerCours():Observable<any>{
    return this.http.get<any>(this.apiUrl+this.listCours)
  }

 
  

  public getSessionCours(idCours : number) : Observable<ResponseCours>{
    return this.http.get<ResponseCours>(this.apiUrl+this.uriSession+idCours);
  }

 
  
}
