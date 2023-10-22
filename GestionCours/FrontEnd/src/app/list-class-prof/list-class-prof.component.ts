import { Component, OnInit } from '@angular/core';
import { ProfService } from 'src/services/prof.service';

@Component({
  selector: 'app-list-class-prof',
  templateUrl: './list-class-prof.component.html',
  styleUrls: ['./list-class-prof.component.css']
})


export class ListClassProfComponent implements OnInit {

  user : any;
  courses : any;
  changeComp : boolean = true;
  
  constructor(public profService : ProfService){}

  ngOnInit(): void {

    let getUser = localStorage.getItem('user');
    if(getUser)this.user = JSON.parse(getUser);
    
    
    this.profService.getProfCours(this.user.id).subscribe(response=>{
      this.courses = response; 
    });

   
   
  }

  getSession(cours : any)
  {
    this.changeComp = false;
    localStorage.setItem('cours',JSON.stringify(cours));

  }

  backToCours()
  {
    this.changeComp = true;
    localStorage.removeItem('cours');
  }

}
