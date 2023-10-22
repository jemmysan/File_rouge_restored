import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResponseCours } from 'src/interfaces/response-cours';
import { ClasseService } from 'src/services/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})


export class ClasseComponent implements OnInit {

  classes :any;
  changeTolist : boolean = true;


  ngOnInit(): void {
    this.classeService.listClass().subscribe(response =>{
      this.classes = response;
      // console.log(this.classes)
   })
   
  }

  constructor(public classeService : ClasseService ){}

  idClasse(classe : number)
  {
    localStorage.setItem('classe',JSON.stringify(classe));
    this.changeTolist = false;
  }

  backToClasse()
  {
    localStorage.removeItem('classe');
    this.changeTolist = true;
  }

}
