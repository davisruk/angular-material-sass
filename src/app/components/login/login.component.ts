import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../state/app.state';
import { Login } from '../../state/actions/auth-actions';
import { Observable } from 'rxjs';
import { AuthenticationState } from '../../state/authentication-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  authState: Observable<AuthenticationState>;
  errorMessage: string | null;
  constructor(private store: Store<AppState>) {
    this.authState = store.select(selectAuthState);
  }

  ngOnInit() {
    this.user = new User();
    this.authState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit () {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };

    this.store.dispatch(new Login(payload));
  }
}
