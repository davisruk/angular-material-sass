import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  styleTheme: Observable<string>;
  constructor (private themeService: ThemeService) { }

  ngOnInit () {
    this.styleTheme = this.themeService.styleClass;
  }
}
