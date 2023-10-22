import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthentificationService } from 'src/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{

  login : any;

  constructor (public logInService : AuthentificationService, public router : Router){}

  ngOnInit(){
   
  }

  connexionForm = new FormGroup ({
    login : new FormControl,
    password : new FormControl
  })

  toLogIn()
  {
      this.logInService.login(this.connexionForm.value).subscribe(response =>{
        // console.log(response)
        if(response.status === 200)
        {
            const user = response.user;
            const token = response.token
            localStorage.setItem('token', JSON.stringify(token))
            localStorage.setItem('user',JSON.stringify(user))
            
            if(user.role ==='RP') this.router.navigateByUrl('/rp');
            if(user.role ==='Prof') this.router.navigateByUrl('/prof');
            if(user.role === 'Attache')this.router.navigateByUrl('/attache');
        }
      })
  }


}


