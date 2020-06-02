import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessMessengerComponent } from './success-messenger/success-messenger.component';
import { FailureMessengerComponent } from './failure-messenger/failure-messenger.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessMessengerComponent,
    FailureMessengerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
