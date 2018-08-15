import { Component, OnInit} from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-fetch',
  templateUrl: './user-fetch.component.html',
  styleUrls: ['./user-fetch.component.css']
})
export class UserFetchComponent implements OnInit {

  userId = '';
  userDetail = [];
  userResponseError = '';

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
  }

  userIdEntered() {
    return this.userId === '';
  }

  onSubmitRequest() {
    this.usersService.getUserDetails(this.userId)
      .subscribe(
        (user) => this.userDetail = user,
        (error) => this.userResponseError = 'We are only showing 5 accounts in our database. Try a User between 1 and 5. ;~)'
      );
    this.userId = '';
    return this.userResponseError = '';
  }
}
