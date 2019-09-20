import { Component } from '@angular/core'
import { EventService } from '../shared/events.service'
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
    .container {padding-right: 20px; padding-left: 20px;}
    .event-image {height: 100px}
    a:hover {cursor:pointer}
    `
  ]
})

export class EventDetailsComponent{
  addMode:boolean = false
  event: IEvent
  filterBy:string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService:EventService, private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params.forEach((params:Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    })
  }

  addSession(){
    this.addMode =true
  }

  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode=false;
  }
}
