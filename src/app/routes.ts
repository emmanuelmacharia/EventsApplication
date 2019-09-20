import { Routes } from '@angular/router'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { EventListComponent } from './events/events-list.comonent'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.cservice'
import { EventListResolver } from './events/shared/events-list-resolver.service'
import { CreateSessionComponent } from './events'


export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']}, //placement is super important
  { path: 'events', component: EventListComponent, resolve: { events: EventListResolver}},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: '', redirectTo: '/events', pathMatch:'full'},
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: 'events/sessions/new', component: CreateSessionComponent}
]
