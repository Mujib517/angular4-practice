import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'change-detect',
    template: `
        <h1>{{user.name}}</h1>
        <h5>{{user.designation}}</h5>

        <button (click)="change()">Change Detect</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChangeDetectComponent implements OnInit {
    @Input() user;

    ngOnInit() {

        let userNew = { name: "New User", designation: 'New Designation' };
        //var obs = Observable.of(userNew);


        setTimeout(() => {
            this.user.name = "Late";
        }, 3000); //this wont be updated
    }

    change() {
        this.user.name = "Changed user";
        console.log('changed');
    }
}