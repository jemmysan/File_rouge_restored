import { Component, OnDestroy, OnInit } from '@angular/core';
import { AttacheService } from 'src/services/attache.service';

@Component({
  selector: 'app-annule',
  templateUrl: './annule.component.html',
  styleUrls: ['./annule.component.css']
})


export class AnnuleComponent implements OnInit {

  demandes : any;
  showMotif : boolean = false


  constructor(public attacheService : AttacheService){}

  ngOnInit(): void {

   this.attacheService.listDemande().subscribe(response => {
      this.demandes = response;
      // console.log(this.demandes);
    })
  }

  traiterDemande(value : number){
      console.log(value);
  }


  consulte()
  {
    this.showMotif = true;
  }

  closeModal()
  {
    this.showMotif = false;
  }

}
