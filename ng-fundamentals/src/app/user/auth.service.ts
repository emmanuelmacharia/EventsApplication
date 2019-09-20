import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AuthService{
  currentUser:IUser;
  loginUser(userName:string, password: string){
    this.currentUser = {
      id:1,
      firstName: 'John',
      lastName:"Papa",
      userName:userName
    }
    console.log(this.currentUser.userName)
  }

  isAuthenticated(){
    return !!this.currentUser;
  };

  updateCurrentUser(firstname:string, lastname:string){
    this.currentUser.firstName = firstname;
    this.currentUser.lastName = lastname;
  };
}


