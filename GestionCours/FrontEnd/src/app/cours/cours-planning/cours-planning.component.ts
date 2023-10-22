import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursplanningService } from 'src/services/coursplanning.service';

@Component({
  selector: 'app-cours-planning',
  templateUrl: './cours-planning.component.html',
  styleUrls: ['./cours-planning.component.css']
})
export class CoursPlanningComponent implements OnInit {

  coursComponents : any;
  cours : any;
  professeurs : any[] = [];
  listCours : any;
  displayModal : boolean = false;
  changeComp : boolean = true;
  session : any;
 
  
  constructor (public coursPlanService : CoursplanningService){}

  ngOnInit(): void {
   this.coursPlanService.getCoursComponents().subscribe(response =>{
      this.coursComponents = response;
   })

   this.listerCours();
  }

  planningCoursFrom = new FormGroup({
    module : new FormControl(null,Validators.required),
    semestre_id : new FormControl(null,Validators.required),
    classe_id : new FormControl(null,Validators.required),
    professeur : new FormControl(null,Validators.required),
    quantum_horaire : new FormControl(null,[Validators.required, Validators.pattern(/^\d+$/)]),
  })

  showModal()
  {
    this.displayModal = true
  }

  closeModal()
  {
    this.displayModal = false
  }

  plannifierCours()
  {
      this.coursPlanService.planifierCours(this.planningCoursFrom.value).subscribe(response=>{
        this.cours = response.data;
        this.planningCoursFrom.reset();
      })
  }

  listerCours()
  {
    this.coursPlanService.listerCours().subscribe(response=>{
      this.listCours = response
      console.log(this.listCours);
   })
  }

  


  moduleChanged(){
    const moduleId = this.planningCoursFrom.get('module')?.value;
    const selectedModule = this.coursComponents.modules.find((module : any)=>module.id === moduleId);
    selectedModule ?this.professeurs = selectedModule.profs : this.professeurs = [];
  }

  sessionCours(item:any)
  {
    this.changeComp = false;
    localStorage.setItem('module-session',JSON.stringify(item));    
  }

  backToCours()
  {
    this.changeComp = true;
    localStorage.removeItem('module-session')  
  }
  
}
