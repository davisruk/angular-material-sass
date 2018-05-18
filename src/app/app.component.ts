import { Component, OnInit } from '@angular/core';
import { AppState } from './state/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UIState from './state/ui.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  styleTheme: Observable<string>;

  constructor (private store: Store<AppState>) {
    this.styleTheme = store.select(UIState.getThemeNameState);
  }
}
