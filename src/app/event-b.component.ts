import {Component} from '@angular/core';

@Component({
  selector: 'app-event-b',
  template: `
    <p>
      Click For Event 
    </p>
    <button (click)="onclick()"> Hello </button>
  `,
  styles: []
})
export class EventBComponent {

  onclick() {
    alert("hello Welcome to event bidning");
    document.body.style.backgroundColor="green";

  }

  constructor() {
  }


}
