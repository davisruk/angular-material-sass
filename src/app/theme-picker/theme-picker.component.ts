import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../core/services/theme.service';
import { ThemeOption } from './theme-option';
import { MatSelect, MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  themeOptions: ThemeOption[] = [
    {value: -1, text: 'Indigo Pink'},
    {value: 0, text: 'Deep Purple Amber'},
    {value: 1, text: 'Pink Blue Grey'},
    {value: 2, text: 'Purple Green'}
  ];

  tiles = [
    {text: 'Indigo Pink', cols: 1, rows: 1, color: 'indigo'},
    {text: 'Deep Purple Amber', cols: 1, rows: 1, color: 'purple'},
    {text: 'Pink Blue Grey', cols: 1, rows: 1, color: 'pink'},
    {text: 'Purple Green', cols: 1, rows: 1, color: 'pink'},
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

  handleThemeChange(event: MatSelectChange) {
     this.themeService.setStyleClass(event.value === -1 ? null : this.styleThemes[event.value]);
     this.chosenTheme = event.value;
  }
  changeTheme(theme: ThemeOption) {
    this.themeService.setStyleClass(theme.value === -1 ? null : this.styleThemes[theme.value]);
    this.chosenTheme = theme.value;
  }
}
