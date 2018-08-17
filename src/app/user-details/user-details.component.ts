import { Component, OnInit } from '@angular/core';

import { UsersService } from '../shared/users.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  showTransactions = false;
  userInfo = this.usersService.userFetch;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  showDetailsCheck() {
    return this.userInfo.length !== 0;
  }
  showLastTransactions() {
    this.showTransactions = !this.showTransactions;
  }
}
