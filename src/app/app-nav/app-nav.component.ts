import { Component, ElementRef, ViewChild, OnInit, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { MenuItem } from '../menu/model/menu-item.model';
import { MatSidenav } from '@angular/material/sidenav';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemePickerOverlayService, ThemePickerOverlayRef } from '../theme-picker/theme-picker-overlay.service';
import { MatButton } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { UIState } from '../model/ui.model';

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
  overlayRef: ThemePickerOverlayRef;
  $uiState: Observable<UIState>;
  currentUIState: UIState;

  constructor(private breakpointObserver: BreakpointObserver,
              private themePickerService: ThemePickerOverlayService,
              private store: Store<AppState>) {
    this.isHandSet = this.breakpointObserver.observe(Breakpoints.HandsetPortrait);
    this.isHandSet.subscribe((breakState: BreakpointState) => {
      this.sidebarMenu = breakState.matches ?
        this.initSideMenu.concat(this.toolbarMenu) : this.initSideMenu;
      this.showToolbarButton = breakState.matches;
    });
  }

  ngOnInit(): void {
      this.$uiState = this.store.pipe(select('ui'));
      this.$uiState.subscribe((next: UIState) => {
        this.currentUIState = next;

        if (this.overlayRef) {
          this.closeOverlay();
        }
      });

      this.themePickerService.backDropClicked.subscribe(_ => this.overlayRef = null);
  }

  handleMenuButtonClick() {
    this.drawer.toggle();
    this.showToolbarButton = !(this.drawer.opened);
  }

  toggleThemePicker() {
    if (!this.overlayRef) {
      this.overlayRef = this.themePickerService.open(this.themeButton._elementRef);
    } else {
      this.closeOverlay();
    }
  }

  closeOverlay() {
    if (this.currentUIState.themeState.canClose) {
      this.overlayRef.close();
      this.overlayRef = null;
    }
  }
}
