import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  public bool = false

  get isLoggedIn() {
    return this.loggedIn; // {2}
  }

  get isbool() {
    return this.bool;
  }

  constructor(private http:HttpClient) {
  }

  login(username:string, password:string) {
    return this.http.post('https://api.enevo.com/api/3/session', {username: username, password: password})
      .map(response => {
        // login successful if there's a jwt token in the response
        if (response) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentToken', response["session"].token);

          localStorage.setItem('currentCustomer', JSON.stringify(response["session"].customer));

        }
        this.loggedIn.next(true);
        this.bool = true;

        return response;
      });
  }

  logout() {
    // remove user from local storage to log user out
    this.loggedIn.next(false);
    this.bool = false;

    localStorage.removeItem('currentUser');
  }
}
