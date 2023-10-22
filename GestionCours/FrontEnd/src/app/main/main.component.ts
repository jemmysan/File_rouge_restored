import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  getSessionChild! : string;
  child :string = 'classe';
  user : any;
  
    

  constructor(private router : Router){
    // localStorage.removeItem('childSession')
  }

  ngOnInit(): void {
    initFlowbite();
    let getUser = localStorage.getItem('user');
    if(getUser)this.user = JSON.parse(getUser);

  }


  cours()
  {
    this.child = 'planningCours';
    // localStorage.removeItem('childSession')
  }

  inscription()
  {
    this.child = 'classe';
  }

  mesCours()
  {
    this.child = 'msCours';
  }

  logout()
  {
    localStorage.clear()
    this.router.navigateByUrl('/login');
  }
  
}
