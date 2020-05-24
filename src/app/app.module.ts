import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PracticeComponent} from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
