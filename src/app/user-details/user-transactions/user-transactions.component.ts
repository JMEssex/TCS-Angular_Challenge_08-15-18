import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.css']
})
export class UserTransactionsComponent implements OnInit {

  transactions: any[] = this.usersService.userDetails.transactions;
  lastFour = this.transactions.slice(-4).reverse();

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }
}
