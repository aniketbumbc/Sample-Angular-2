import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template:`
<a href="http://www.espncricinfo.com/"> <h1 align="center"> <Font color="#7fff00"> ESPN </Font> </h1> </a>
<ng-content></ng-content>
<h1 align="center"> String Interpolation  </h1>
<h2>
{{Name}} <br>
{{Number}}
</h2><hr>
<h1 align="center"> property and event binidng </h1>
Name:- <input type="text" value="{{Name}}"/> <!-- html elements binding -->
Number:- <input type="text" value="{{Number}}"/>
<h1 align="center"> Directive property binidng </h1>
<p [ngClass]="{redborder: true}"> Get Border Me</p>
`

})
export class HelloComponent implements OnInit {
  Name="Aniket";
  Number=443699;
  constructor() { }

  ngOnInit() {
  }

}
