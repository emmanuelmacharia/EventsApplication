//Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

//Component Imports
import { EventsAppComponent } from './events-app.component';
import { appRoutes } from './routes';
import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  // EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index'
import { NavBarComponent } from './nav/index'
import { TOASTR_TOKEN, CollapsibleWell, JQ_TOKEN, Toastr, SimpleModal, ModalTriggerDirective } from './common/index';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

let toastr:Toastr = window['toastr']
let jQuery = window['$']

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [  //we need to register every component to this list of declarations
    NavBarComponent,
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWell,
    DurationPipe,
    SimpleModal,
    UpvoteComponent,
    //Directives are registered just as components are in the list of declarations
    ModalTriggerDirective,
    LocationValidator
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN, useValue:toastr
    },
    {
      provide: JQ_TOKEN, useValue:jQuery
    },
    // EventRouteActivator,
    EventResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService,
    VoterService
  ], //for services; always add these to module before using them; we need services to make our application more modular. we use DEPENDANCY INJECTION
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event; do you really want to cancel?')
  } return true;
}
