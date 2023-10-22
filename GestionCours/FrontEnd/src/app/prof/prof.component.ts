import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponseCours } from 'src/interfaces/response-cours';
import { ProfService } from 'src/services/prof.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})


export class ProfComponent implements OnInit{

  child : string = 'msCours';
  user : any;
  logChild : boolean = false ;
  cours : any

  constructor(public profService :  ProfService, private router : Router){};

  ngOnInit(): void {
    let getUser = localStorage.getItem('user');
    if(getUser)this.user = JSON.parse(getUser);
  }


  myCourses()
  {
    this.child = 'msCours'
    
  }

  logout()
  {
    localStorage.clear()
    this.router.navigateByUrl('/login');
  }

}
