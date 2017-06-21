import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-animate',
  template: `

<button class="btn btn-primary" (click)="animate()">Animate</button>

<button class="btn btn-primary" (click)="resolve()">Reload</button>

  


   <div class="col-sm-3">
      <div class="well" *ngFor="let user of users" [@flyInOut]="'in'" >
         <h4>{{user.login}}</h4>
         <hr>
      </div>
   </div>
    
  `,

  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ])
    ])
  ]


  // animations: [
  //   trigger('visibilityChanged', [
  //     state('true', style({ opacity: 1 })),
  //     state('false', style({ opacity: 0 })),
  //     transition("*=>*", animate(400))
  //   ])
  // ]
})
export class AnimateComponent {

  visible = false;
  users: any[];
  obs: any;
  next: number=0;
  staggeringUsers: any[]=[];

  constructor(private http: Http) { }

  animate() {
    this.visible = !this.visible;
  }

  ngOnInit() {

    //http observable is cold observable. Wont make a call unless subscribed.
    this.obs = this.http.get('https://api.github.com/users')
      .map(response => response.json())
      .subscribe((data) => {
        this.users = data;
        this.visible = true;
      })
    //.toPromise();


    //converting an observable to promise will not make extra call to http rather resolves the same promise

    //this.obs.subscribe(data => this.users = data);
  }

  resolve() {
    this.obs.subscribe(data => this.users = data);
    //cold observable will make an http call each time we subscribe to it.
  }


  doNext() {
    console.log('doing next');
    if (this.next < this.users.length) {
      this.staggeringUsers.push(this.users[this.next++]);
    }
  }
}
