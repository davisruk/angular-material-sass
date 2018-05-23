import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import * as UIState from '../../state/ui.reducer';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  styleTheme: Observable<string>;

  constructor (private store: Store<AppState>) {
    this.styleTheme = store.select(UIState.getThemeNameState);
  }

  ngOnInit() {
  }

}
