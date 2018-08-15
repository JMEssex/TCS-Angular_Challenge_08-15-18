import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}
  getUserDetails(userId) {
    return this.http.get(`http://localhost:3000/users/${userId}`)
      .pipe(
        map(
          (response) => response
        )
      );
  }
}
