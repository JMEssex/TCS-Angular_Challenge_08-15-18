import { Component } from '@angular/core';

import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDetails = [];
  show;
  showDetails = false;

  constructor(private usersService: UsersService) { }

  onPopulateUserDetails(populatedUserDetails) {
    this.userDetails = populatedUserDetails;
  }
}
