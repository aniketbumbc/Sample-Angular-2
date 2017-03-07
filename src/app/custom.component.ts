import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-custom',
  template: `
    <p>
      custom Works!
    </p>
    {{rollnumber}}
  `,
  styles: []
})
export class CustomComponent   {
@Input() rollnumber:number=43645;
  constructor() { }


}
