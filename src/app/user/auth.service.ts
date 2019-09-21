import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { userInfo } from 'os';

@Injectable()
export class AuthService{
  currentUser:IUser;
  constructor(private http:HttpClient){}

  loginUser(userName:string, password: string){
    // this.currentUser = {
    //   id:1,
    //   firstName: 'John',
    //   lastName:"Papa",
    //   userName:userName
    // }
    let options = {headers: new HttpHeaders({'Content-type': 'application/json'})}
    let loginInfo = {username: userName, password:password}
    return this.http.post('/api/login', loginInfo, options).pipe(
      tap(data => {
        this.currentUser = <IUser>data['user']
      })
    ).pipe(catchError(err => {
        return of(false)
      })
    )
  }

  isAuthenticated(){
    return !!this.currentUser;
  };

  checkAuthenticationStatus(){
    // this.http.get('/api/currentIdentity').subscribe(data => {
    //   if(data instanceof Object){
    //     this.currentUser = <IUser>data;
    //   }
    // })
    this.http.get('/api/currentIdentity').pipe(
      tap(data => {
      if(data instanceof Object){
        this.currentUser = <IUser>data;
      }})
    ).subscribe()
  }

  updateCurrentUser(firstname:string, lastname:string){
    this.currentUser.firstName = firstname;
    this.currentUser.lastName = lastname;

    let options = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
    const url = `/api/users/${this.currentUser.id}`

    return this.http.put(url, this.currentUser ,options );
  };


  logout(){
    this.currentUser = undefined
    let options = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
    return this.http.post('/api/logout', {}, options);
  }
}


