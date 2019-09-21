import { Component } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './login.component.html',
  styles: [
    `em {float: right; color: #E05C65; padding-eft: 15px;}`
  ]
})
export class LoginComponent{
  username
  password
  mouseoverLogin
  loginInvalid = false
  constructor(private authService: AuthService, private router:Router){}

  login(formValues){
    console.log(formValues)
    this.authService.loginUser(formValues.userName, formValues.password).subscribe(
      response => {
        if(!response){
          this.loginInvalid = true;
        } else{
          this.router.navigate(['events'])
        }
      }
    )

  }
  cancel(){
    this.router.navigate(['events'])
  }
}
