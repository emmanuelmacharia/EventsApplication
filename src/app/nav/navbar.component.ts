import {Component, Input} from '@angular/core'
import { AuthService } from '../user/auth.service';
import { ISession, EventService, IEvent } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
      .nav.navbar-nav { font-size: 15px; }
      #searchForm { margin-right: 5rem; }
      @media (max-width: 1200px){#searchForm {display:none;}}
      li > a.active { color: #F97924; }
    `]
})

export class NavBarComponent {
  searchTerm:string =''
  foundSessions:ISession[];
  @Input() events:IEvent[];

  constructor(private authService:AuthService , private eventService:EventService ){}

  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
    })
  }
}
