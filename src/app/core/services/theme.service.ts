import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
//  private _darkTheme: Subject<boolean> = new Subject<boolean>();
//  isDarkTheme = this._darkTheme.asObservable();
  private _styleClass: Subject<string> = new Subject<string>();
  styleClass = this._styleClass.asObservable();
  constructor() { }
/*
  setDarkTheme(isDarkTheme: boolean) {
    this._darkTheme.next(isDarkTheme);
  }
*/
  setStyleClass(styleClass: string) {
    this._styleClass.next(styleClass);
  }
}
