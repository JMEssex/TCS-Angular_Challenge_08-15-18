import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.css']
})
export class UserTransactionsComponent implements OnInit {

  transactions = ['Transaction 1', 'Transaction 2', 'Transaction 3', 'Transaction 4', 'I wish this was not static.'];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  displayTransactions() {
    // Take the input data from user-details.transactions after the "get" request, and then map over
    // the array of objects which contains an "id", "userAccount", and "amount".
    // EX: { "id": "4-005", "userAccount": "checking", "amount": 5.95}
  }
}
