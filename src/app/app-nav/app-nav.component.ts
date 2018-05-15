import { Component, ElementRef, ViewChild, OnInit, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { MenuItem } from '../menu/model/menu-item.model';
import { MatSidenav } from '@angular/material/sidenav';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '../core/services/theme.service';
import { ThemePickerOverlayServiceService, ThemePickerOverlayRef } from '../theme-picker/theme-picker-overlay-service.service';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})

export class AppNavComponent implements OnInit {

  @ViewChild('drawer') drawer: MatSidenav;
  @ViewChild('themeButton') themeButton: MatButton;
  isHandSet: Observable<BreakpointState>;
  showToolbarButton = false;
  sidebarMenu: MenuItem[];
  toolbarMenu: MenuItem[] = [{title: 'Documentation'}, {title: 'About'}];
  initSideMenu: MenuItem[] = [{title: 'Patients'}, {title: 'Prescriptions'}, {title: 'Stores'}];
  appTitle = 'Material Test';

  constructor(private breakpointObserver: BreakpointObserver,
              private themePickerService: ThemePickerOverlayServiceService) {
    this.isHandSet = this.breakpointObserver.observe(Breakpoints.HandsetPortrait);

    this.isHandSet.subscribe((state: BreakpointState) => {
      this.sidebarMenu = state.matches ?
        this.initSideMenu.concat(this.toolbarMenu) : this.initSideMenu;
      this.showToolbarButton = state.matches;
    });
  }

  ngOnInit(): void {
  }

  handleMenuButtonClick() {
    this.drawer.toggle();
    this.showToolbarButton = !(this.drawer.opened);
  }

  openThemePicker() {
    const overlayRef: ThemePickerOverlayRef = this.themePickerService.open(this.themeButton._elementRef);
/*
    setTimeout(() => {
      overlayRef.close();
    }, 2000);
  */
  }
}
