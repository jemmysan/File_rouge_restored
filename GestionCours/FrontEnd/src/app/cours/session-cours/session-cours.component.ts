import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResponseCours } from 'src/interfaces/response-cours';
import { SessioncoursService } from 'src/services/sessioncours.service';
import { SalleService } from 'src/services/salle.service';

@Component({
  selector: 'app-session-cours',
  templateUrl: './session-cours.component.html',
  styleUrls: ['./session-cours.component.css']
})
export class SessionCoursComponent implements OnInit{

  sessionCours : any;
  addSession : any;
  getSalleCont : any;
  salleSession : any
  @Output() emitter : EventEmitter<any> = new EventEmitter();

  

  addSessionForm = new FormGroup ({
    cours_id : new FormControl(),
    type : new FormControl(),
    salle_id : new FormControl(),
    date : new FormControl(),
    heure_debut : new FormControl(),
    heure_fin : new FormControl(),
  })

  
  constructor(public SessioncoursService : SessioncoursService, 
              public salleServ : SalleService){}
  
  ngOnInit(): void { 
    const getSessionCours = localStorage.getItem('module-session');
    if(getSessionCours)this.sessionCours = JSON.parse(getSessionCours);

    let classEffectif = this.sessionCours.classe_id.effectif
    // console.log(classEffectif);
    
    this.salleServ.salleContClass(20).subscribe(response =>{
      this.getSalleCont = response;
      // console.log(this.getSalleCont); 
    });

    this.salleServ.getSallSession().subscribe(response =>{
      this.salleSession = response;
    })

    
  }

  findSalle(idSalle: number)
  {
    if (Array.isArray(this.salleSession) && this.salleSession.length > 0) {
      let salle =  this.salleSession.find((sal: any) => sal.id == idSalle);
      // console.log(salle);
      return salle.nom_salle;
      
    }
  
  }


  showModal()
  {
      let idModal = document.getElementById('modal')
      if(idModal) idModal.style.display = 'block';
       this.addSessionForm.get('cours_id')?.setValue(this.sessionCours.id);
      
  }

  closeModal()
  {
    let idModal = document.getElementById('modal')
      if(idModal) idModal.style.display = 'none';
  }

  addSesionCours(){
    this.addSession = this.addSessionForm.value
    console.log(this.addSession);
      this.SessioncoursService.ajoutSession(this.addSession).subscribe(response =>{
        console.log(response.data)
      })
  }

  convertToTime(time:number)
  {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    let result = `${hours} h : ${minutes} mn`
    return result;
  }
  
}


