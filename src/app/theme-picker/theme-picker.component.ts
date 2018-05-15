import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../core/services/theme.service';
import { ThemeOption } from './theme-option';
import { ThemePickerOverlayRef, ThemePickerOverlayService } from './theme-picker-overlay.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  tiles: ThemeOption[] = [
    {text: 'Indigo Pink', cols: 1, rows: 1, class: 'indigo-theme', secondary: 'indigo-pink', value: -1},
    {text: 'Deep Purple Amber', cols: 1, rows: 1, class: 'deep-purple-theme', secondary: 'purple-amber', value: 0},
    {text: 'Pink Blue Grey', cols: 1, rows: 1, class: 'pink-theme', secondary: 'pink-blue', value: 1},
    {text: 'Purple Green', cols: 1, rows: 1, class: 'purple-theme', secondary: 'purple-green', value: 2},
  ];

  styleTheme: Observable<string>;
  // only store the 3 non default themes - indigo pink is the default
  styleThemes = ['deep-purple-amber', 'pink-blue-grey', 'purple-green'];
  chosenTheme = -1;
  showGridList = false;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.styleTheme = this.themeService.styleClass;
  }

  changeTheme(theme: ThemeOption) {
    this.themeService.setStyleClass(theme.value === -1 ? null : this.styleThemes[theme.value]);
    this.chosenTheme = theme.value;
  }
}
