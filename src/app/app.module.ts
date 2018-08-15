import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserFetchComponent } from './user-fetch/user-fetch.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserTransactionsComponent } from './user-details/user-transactions/user-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFetchComponent,
    UserDetailsComponent,
    UserTransactionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
