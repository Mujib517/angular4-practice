import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'async-comp',
    template: `
        <div>
            <div *ngFor="let user of users|async">
                <div>{{name}}</div>
                <div><img width="100" height="80" [src]="user.avatar_url"></div>
            </div>
        </div>
    `
})

export class AsyncComponent {

    users: any;

    constructor(private http: Http) { }

    ngOnInit() {
        this.users = this.http.get('https://api.github.com/users')
                          .map(response=>response.json());
    }
}