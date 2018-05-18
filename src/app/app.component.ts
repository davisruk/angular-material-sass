import { Component, OnInit } from '@angular/core';
import { UIState } from './model/ui.model';
import { AppState } from './state/app.state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  styleTheme: string;

  constructor (private store: Store<AppState>) {
    store.pipe(select('ui')).subscribe((next: UIState) => this.styleTheme = next.themeState.themeName);
  }
}
