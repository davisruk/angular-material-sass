import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { Login } from '../../state/actions/auth-actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit () {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };

    this.store.dispatch(new Login(payload));
  }
}
