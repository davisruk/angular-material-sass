import { Injectable } from '@angular/core';
import { User, MOCK_USER } from '../model/user.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate (email: string, password: string): Observable<User> {
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      return of(MOCK_USER);
    }
    return throwError(new Error('Incorrect email or password'));
  }
}
