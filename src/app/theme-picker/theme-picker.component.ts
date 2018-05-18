import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
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
    {text: 'Indigo Pink', cols: 1, rows: 1, class: 'indigo-theme', secondary: 'indigo-pink', value: 0, isDark: false},
    {text: 'Deep Purple Amber', cols: 1, rows: 1, class: 'deep-purple-theme', secondary: 'purple-amber', value: 1, isDark: false},
    {text: 'Pink Blue Grey', cols: 1, rows: 1, class: 'pink-theme', secondary: 'pink-blue', value: 2, isDark: false},
    {text: 'Purple Green', cols: 1, rows: 1, class: 'purple-theme', secondary: 'purple-green', value: 3, isDark: false},
  ];

  // null first entry for default style
  styleThemes = [ null,
                  'deep-purple-amber-light-theme',
                  'pink-blue-grey-light-theme',
                  'purple-green-light-theme',
                  'indigo-purple-dark-theme',
                  'deep-purple-amber-dark-theme',
                  'pink-blue-grey-dark-theme',
                  'purple-green-dark-theme'
                ];

  useDark = false;
  currentThemeIndex: number;
  sliderBackground = 'lightgrey';

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.useDark = this.themeService.isDark;
    this.currentThemeIndex = this.styleThemes.indexOf(this.themeService.theme);
    if (this.currentThemeIndex === -1) {
      this.currentThemeIndex = 0;
    }
  }

  changeTheme(theme: ThemeOption) {
    const themeIndexOffset = this.useDark === false ?
                    0 :
                    this.styleThemes.length / 2;
    this.currentThemeIndex = theme.value + themeIndexOffset;
    this.themeService.theme = this.styleThemes[this.currentThemeIndex];
    this.themeService.canClose = true;
    this.themeService.setStyleClass(this.styleThemes[this.currentThemeIndex]);
  }

  toggleDark() {
    this.useDark = !this.useDark;
    const themeIndexOffset = this.styleThemes.length / 2;
    this.currentThemeIndex = this.useDark ?
            this.currentThemeIndex + themeIndexOffset :
            this.currentThemeIndex - themeIndexOffset;
    this.themeService.isDark = this.useDark;
    this.themeService.theme = this.styleThemes[this.currentThemeIndex];
    this.themeService.canClose = false;
    this.themeService.setStyleClass(this.styleThemes[this.currentThemeIndex]);
  }

  themeChecked (index: number) {
    index = this.useDark ? index += this.styleThemes.length / 2 : index;
    return index === this.currentThemeIndex;
  }
}
