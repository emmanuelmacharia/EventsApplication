import { Injectable } from "@angular/core";
import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class VoterService{

  constructor(private http:HttpClient){}

  deleteVoter(eventId, session:ISession, votername:string){

    session.voters = session.voters.filter(voter => voter !== votername);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${votername}`
    this.http.delete(url).pipe(
      catchError(this.handleError('addVoter'))
    ).subscribe();
  }

  addVoter(eventId:number, session:ISession, votername:string){
    session.voters.push(votername);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${votername}`
    let options = {headers: new HttpHeaders({'Content-type':'application/json'})}
    return this.http.post<ISession>(url, {}, options).pipe(
      catchError(this.handleError('addVoter'))
    ).subscribe()
  }

  userHasVoted(session:ISession, votername:string){
    return session.voters.some(voter => voter === votername);
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
