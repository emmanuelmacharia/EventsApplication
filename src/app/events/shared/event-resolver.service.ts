import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators'
import { EventService } from './events.service';


@Injectable()
export class EventResolver implements Resolve<any>{
  constructor(private eventService: EventService) { }
  resolve(route:ActivatedRouteSnapshot) {

    return this.eventService.getEvent(route.params['id'])
  }
}
