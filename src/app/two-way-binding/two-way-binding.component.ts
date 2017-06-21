import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [value]="name" (input)="name=$event.target.value"/>

    <div>{{name}}</div>
  `,
  styles: []
})
export class TwoWayBindingComponent {

  name: string = "Mujib";

  constructor() { }

}
