import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CoursComponent } from './cours/cours.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursPlanningComponent } from './cours/cours-planning/cours-planning.component';
import { SessionCoursComponent } from './cours/session-cours/session-cours.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { ClasseComponent } from './cours/classe/classe.component';
import { ListeEtudiantComponent } from './cours/liste-etudiant/liste-etudiant.component';
import { ListClassProfComponent } from './list-class-prof/list-class-prof.component';
import { ProfComponent } from './prof/prof.component';
import { SessionProfComponent } from './list-class-prof/session-prof/session-prof.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TestComponent } from './test/test.component';
import { AttacheComponent } from './attache/attache.component';
import { AnnuleComponent } from './attache/annule/annule.component'
// import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    TimetableComponent,
    NavBarComponent,
    CoursComponent,
    CoursPlanningComponent,
    SessionCoursComponent,
    MainComponent,
    ClasseComponent,
    ListeEtudiantComponent,
    ListClassProfComponent,
    ProfComponent,
    SessionProfComponent,
    TestComponent,
    AttacheComponent,
    AnnuleComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
