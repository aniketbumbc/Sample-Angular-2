import {Component} from '@angular/core';

@Component({
  selector: 'app-twoway',
  template: `
    <h1 align="center">
     <input type="text" [(ngModel)]="person.name"> <br>
      Tow way Data Bindings Type in Text Box {{person.name}}
    </h1>
    
    <input type="text" [(ngModel)]="person.name">
      
        
  `,
  styles: [
    'h1{color:greenyellow;}'
  ]
})
export class TwowayComponent {

  person = {
    name: 'Aniket'
  };

  constructor() {
  }


}
