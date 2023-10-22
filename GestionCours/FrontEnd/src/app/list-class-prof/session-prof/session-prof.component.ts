import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { ProfService } from 'src/services/prof.service';
import { SalleService } from 'src/services/salle.service';

@Component({
  selector: 'app-session-prof',
  templateUrl: './session-prof.component.html',
  styleUrls: ['./session-prof.component.css']
})
export class SessionProfComponent implements OnInit{

  @Output() emitterCoursP : EventEmitter<any> = new EventEmitter();
  viewDate : Date = new Date()
  view : CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  events : CalendarEvent[] = [];
  event1 : any;
  cours : any;
  activeDayIsOpen = false;
  session : any;
  modal : boolean = false;
  motif : boolean = false;
  salleSession : any ;


  constructor(public profService : ProfService, private salleServ : SalleService){}

  ngOnInit(){
    let getCours = localStorage.getItem('cours')
    this.cours = JSON.parse(getCours!);
    this.profService.getSessionCoursProf(this.cours.id).subscribe(response=>{
      this.event1 = response;
      this.evenForCalendar(this.event1.data);
    })

    this.salleServ.getSallSession().subscribe(response =>{
      this.salleSession = response;
      console.log(this.salleSession);
    })


  }

  formMotif = new FormGroup({
    motif : new FormControl()
  });

  setView(view : CalendarView)
  {
    this.view = view
  }

  evenForCalendar(sessions : any)
  {
    sessions.forEach((ev: any) => {

      const start = new Date(ev.date)
      const end =  new Date(ev.date)
      start.setSeconds(ev.heure_debut)
      end.setSeconds(ev.heure_debut);
      
      const event = {
        id : ev.id,
        title: `Module : ${this.cours.prof_module_id.module.libelle}</br>
                Salle : ${ev.salle.nom_salle}`,
        start : start,
        end : end,
      }
      this.events.push(event);
        
      });
  }

  dayClicked({ date }: { date: Date }) {
    // console.log('deux');
    if (isSameMonth(date, this.viewDate)) {
      if (isSameDay(this.viewDate, date) && this.activeDayIsOpen) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventClick(event : any)
  {
    let getEv = event.event.id;
    
    let shownSession = this.events.find((sess:any)=>sess.id === getEv);
    let id = shownSession?.id
    this.session = this.cours.sessions.find((idsess : any)=>idsess.id === id)
    this.modal = true;
    console.log(this.session)
  }


  closeModal()
  {
    this.modal = false;
    // this.modal = false;
  }

  openMotif()
  {
    this.motif = true;
  }

  closeMotif()
  {
    this.motif = false;
  }

  annuleSession()
  {
    let id = this.session.id;
    let text = this.formMotif.get('motif')?.value;
    // console.log(this.formMotif.value);
    this.profService.annuleSession(id,text).subscribe(response=>{
      console.log(response);
    })
    this.closeMotif();
  }
  

  findSalle(idSalle: number)
  {
    if (Array.isArray(this.salleSession) && this.salleSession.length > 0) {
      let salle =  this.salleSession.find((sal: any) => sal.id == idSalle);
      return salle.nom_salle;
    }
  
  }
}
