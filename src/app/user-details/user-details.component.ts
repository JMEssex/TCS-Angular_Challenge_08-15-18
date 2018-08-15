import { Component, OnInit, Output } from '@angular/core';

import { UserFetchComponent } from '../user-fetch/user-fetch.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  showDetails = false;
  showTransactions = false;

  constructor() { }

  ngOnInit() {
  }

  onFetchDetails() {
    this.showDetails = !this.showDetails;
  }

  showLastTransactions() {
    this.showTransactions = !this.showTransactions;
  }
}
