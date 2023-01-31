import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalNewActivityComponent } from './modal-new-activity/modal-new-activity.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,     NgbModule],
  declarations: [ AppComponent, ModalNewActivityComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [
    ModalNewActivityComponent
  ]
})
export class AppModule { }
