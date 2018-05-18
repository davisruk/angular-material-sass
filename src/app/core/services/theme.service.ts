import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _styleClass: Subject<string> = new Subject<string>();

  styleClass = this._styleClass.asObservable();

  isDark = false;
  theme: string;
  canClose: boolean;

  constructor() {
    this.canClose = true;
  }

  setStyleClass(styleClass: string) {
    this._styleClass.next(styleClass);
  }
}
