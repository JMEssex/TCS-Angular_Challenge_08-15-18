import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-fetch',
  templateUrl: './user-fetch.component.html',
  styleUrls: ['./user-fetch.component.css']
})
export class UserFetchComponent implements OnInit {

  userId = '';

  constructor() { }

  ngOnInit() {
  }

  userIdEntered() {
    return this.userId === '';
  }

  resetUserIdForm() {
    return this.userId = '';
  }
}
