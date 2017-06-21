import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'app-animate',
  template: `

<button class="btn btn-primary" (click)="animate()">Animate</button>

    <p [@visibilityChanged]="visible">
      animate Works!
    </p>
  `,
  animations:[
    trigger('visibilityChanged',[
      state('true',style({opacity:1})),
      state('false',style({opacity:0})),
      transition('*=>*',animate('0.5s'))
    ])
  ]
})
export class AnimateComponent {

  visible = false;

  constructor() { }

  animate() {
    this.visible = !this.visible;
  }
}
