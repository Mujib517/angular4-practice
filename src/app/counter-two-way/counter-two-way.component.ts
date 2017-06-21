import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter-two-way',
  template: `  <button (click)="decrement()">-</button>
    <span>{{counter}}</span>
    <button (click)="increment()">+</button>`,
  styles: []
})
export class CounterTwoWayComponent {

  counterVal = 0;
  @Output() counterChnage = new EventEmitter();

  constructor() { }

  @Input()
  get counter() {
    return this.counterVal;
  }

  increment() {
    this.counterVal++;
  }

  decrement() {
    this.counterVal--;
  }

  set counter(val) {
    this.counterVal = val;
    this.counterChnage.emit(this.counterVal);
  }

}
