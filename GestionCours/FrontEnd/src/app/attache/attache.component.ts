import { Component, OnInit } from '@angular/core';
import { AttacheService } from 'src/services/attache.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-attache',
  templateUrl: './attache.component.html',
  styleUrls: ['./attache.component.css']
})


export class AttacheComponent implements OnInit{

  child : string = 'demande';
  user : any ;
  demande : any;

  constructor(public attacheService : AttacheService,private router : Router){}

  ngOnInit(): void {
    let getUser = localStorage.getItem('user');
    this.user = JSON.parse(getUser!)
    // console.log(this.user);
    
    this.attacheService.listDemande().subscribe(response => {
      // console.log(response);
      this.demande = response;
      console.log(this.demande);
    })
    
  }

  callComp(){
    this.child = 'demande';
  }

  listDemandeAnnule()
  {
      
  }

  logout()
  {
    localStorage.clear()
    this.router.navigateByUrl('/login');
  }

}
