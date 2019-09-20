import { Component, Input, EventEmitter, Output } from '@angular/core'
import { IEvent } from './shared';


@Component ({
  selector: "event-thumbnail",
  template: `<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name | uppercase}} </h2>
    <div> Date: {{event?.date | date:'shortDate'}} </div>
    <div [ngStyle]='getStartTimeStyle()' [ngSwitch] = "event?.time">
      Time: {{event?.time}} &nbsp;
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div> Price: {{event?.price | currency : 'USD'}} </div>
    <div [hidden] = "!event?.location">
      <span> Location: {{event?.location?.address}} </span>
      <span class="pad-left"> {{event?.location?.city }}, {{event?.location?.country}} </span>
    </div>
    <div  [hidden] = "!event?.onlineUrl">
    OnlineUrl: <span>{{event?.onlineUrl }}</span>
    </div>
  </div>
  `,
  styles: [
    `.pad-left { margin: 1em; }
     .thumbnail { min-height: 210px; }
     .green { color: green !important; }
     .bold { font-weight: bold; }
    `
  ]
})

export class EventThumbnailComponent {
  @Input() event:IEvent  //we use @Input() to pass data down to the child components from the parent component

    getStartTimeStyle():any {
      if(this.event && this.event.time === '8:00 am'){
        return {color: "green", 'font-weight': 'bold'}
      } return {};
    }

  }

    // @Output() eventClick = new EventEmitter()
  // handleClickMe(){
  //   console.log("Clicked!")
  //   this.eventClick.emit("foo bar")
  //}
  // getStartTime(){
  //   //    <div [ngClass]="getStartTime()" [ngSwitch] = "event?.time">
  //   const isEarly = this.event.time === '8:00 am'
  //   return {green: isEarly, bold: isEarly};
  //   }
