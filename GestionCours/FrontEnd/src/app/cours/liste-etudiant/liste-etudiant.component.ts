import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListEtudiantService } from 'src/services/list-etudiant.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})

export class ListeEtudiantComponent implements OnInit {

  classe : any ;
  listById : any;
  displayModal! : boolean;
  jsonData : any;
  file : any;
  formData  = new FormData();
  annee : any = 1;
  @Output() emitterClasse : EventEmitter<any> = new EventEmitter();


  constructor(public listEtud : ListEtudiantService){}

  ngOnInit(): void {
     const getCl = localStorage.getItem('classe');
     if(getCl) this.classe = JSON.parse(getCl)
    //  console.log(this.classe.id);
    this.getListClassById(this.classe.id);
  }

  getListClassById(idClass : number)
  {
    return this.listEtud.getListClassById(idClass).subscribe(response=>{
      this.listById = response;
      console.log(this.listById);
    })
  }

  selectFile(event : any )
  {
      this.file = event.target.files[0];

      this.formData.append('file',this.file);
      this.formData.append('classe_id',this.classe.id);
      this.formData.append('annee_id',this.annee);

      const reader  =  new FileReader();
      reader.onload = (e : any)=>{
        const data = e.target.result;

        const workBook = XLSX.read(data,{type :'binary'});

        const sheetName = workBook.SheetNames[0];
        const sheet = workBook.Sheets[sheetName];
        this.jsonData = XLSX.utils.sheet_to_json(sheet,{header:1});
      }
      
      reader.readAsBinaryString(this.file);
      
      
    }
    
    inscription()
    {
      this.displayModal = false;
    }

  openModal()
  {
    this.displayModal = true;
  }

  closeModal()
  {
    this.displayModal = false;
  }

  inserer()
  {
    // console.log(this.formData);

    this.listEtud.inscription(this.formData).subscribe(response=>{
      console.log(response);
    })
    
  }
}

