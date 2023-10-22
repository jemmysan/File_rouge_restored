import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseCours } from 'src/interfaces/response-cours';
import { apiEnv } from 'src/environments/apiurl-environment';
import { classEnv } from 'src/environments/class-environment';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  apiUrl = apiEnv.apiUrl;
  uriListClass = classEnv.uriListClass
  constructor(private http : HttpClient) { }


  listClass(): Observable<ResponseCours>
  {
    return this.http.get<ResponseCours>(this.apiUrl+this.uriListClass)
  }
  
}
