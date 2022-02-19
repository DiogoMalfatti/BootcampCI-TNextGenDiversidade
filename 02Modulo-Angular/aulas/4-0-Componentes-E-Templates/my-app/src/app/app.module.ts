import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { C1Component } from './c1.component';
import { C2Component } from './c2/c2.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, C1Component, C2Component, CounterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
