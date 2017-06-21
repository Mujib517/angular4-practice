import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { App2Component } from './app2.component';
import { ChangeDetectComponent } from './changeDetect/changeDetect.component';
import { AsyncComponent } from './asyncpipe/async.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CounterTwoWayComponent } from './counter-two-way/counter-two-way.component';
import { AnimateComponent } from './animate/animate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectComponent,
    App2Component,
    AsyncComponent,
    TwoWayBindingComponent,
    CounterTwoWayComponent,
    AnimateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,App2Component]
})
export class AppModule { }
