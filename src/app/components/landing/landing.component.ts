import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import * as UIState from '../../state/ui.reducer';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  styleTheme: Observable<string>;

  constructor (private store: Store<AppState>) {
    this.styleTheme = store.select(UIState.getThemeNameState);
  }


  ngOnInit() {
  }
}
