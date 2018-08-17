import { Component, OnInit } from '@angular/core';

import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  showDetails = false;
  showTransactions = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onFetchDetails() {
    this.showDetails = !this.showDetails;
    
  }

  showLastTransactions() {
    this.showTransactions = !this.showTransactions;
  }
}
