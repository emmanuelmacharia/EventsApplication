import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>`

})
export class EventsAppComponent {
  title = 'ng-fundamentals';
  constructor(private authService:AuthService){}
  ngOnInit(){
    this.authService.checkAuthenticationStatus();
  }
}

/**
 * Interpolation:
 * uses curly-braces to receive a unit of data in the template
 * e.g. <h1>{{user.name}}</h1>; we're interpolating username data to the h1 element;
 * user.name is an expression
 */

 /**
  * Property Binding
  * we use square-brackets to bind to property
  * e.g. <img [src] = "user.image"/>; we're binding the user.image to the source attribute of the image-tag
  */

/**
 * Event-binding:
 * we use parentheses to bind to events;
 * e.g. <button (click)="doSomething()"></button>; we're binding the click event to the doSomething() method
 */

/**
 * Expression restrictions:
 * No assignment operators: (=, +=, ++, etc)
 * new Keywords: they cant use 'new' to create new objects
 * Expressions cannot chain multiple expressions using semi-colons
 * No use of the global namespace
 */

/**
 * Expressions should have No-side effects
 * Should be fast
 * simple and idempotent
 *
 * Expressions can be anything, ranging from function calls, to JS expressions like  2 + 2;
 * angular is able to return the result/necessary data in these expressions
 */

 /**
  * Statements;
  * Statements are what are in quotes when doing property and event binfdings
  * there are some restrictions here;
  *   Although they can use the assignment operator (=); the rest are prohibited
  *   They should be SIMPLE; it's the only recommendation that carries through from the expressions- restriction;
  */
