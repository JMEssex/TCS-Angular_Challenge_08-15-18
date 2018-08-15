import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserFetchComponent } from './user-fetch/user-fetch.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserTransactionsComponent } from './user-details/user-transactions/user-transactions.component';
import { UsersService } from './shared/users.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFetchComponent,
    UserDetailsComponent,
    UserTransactionsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
