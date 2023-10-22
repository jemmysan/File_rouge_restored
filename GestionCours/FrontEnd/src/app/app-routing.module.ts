import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursPlanningComponent } from './cours/cours-planning/cours-planning.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProfComponent } from './prof/prof.component';
import { SessionProfComponent } from './list-class-prof/session-prof/session-prof.component';
import { TestComponent } from './test/test.component';
import { AttacheComponent } from './attache/attache.component';


const routes : Routes = [
  // {path : 'coursPlanning', component : CoursPlanningComponent,},
  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent},
  {path : 'rp', component : MainComponent},
  {path : 'prof', component : ProfComponent},
  {path : 'test', component : TestComponent},
  {path : 'attache', component : AttacheComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
