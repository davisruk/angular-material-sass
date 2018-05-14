import { Component, ElementRef, ViewChild, OnInit, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { MenuItem } from '../menu/model/menu-item.model';
import { MatSidenav } from '@angular/material/sidenav';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})

export class AppNavComponent implements OnInit {

  @ViewChild('drawer') drawer: MatSidenav;
  isHandSet: Observable<BreakpointState>;
  showToolbarButton = false;
  sidebarMenu: MenuItem[];
  toolbarMenu: MenuItem[] = [{title: 'Documentation'}, {title: 'About'}];
  initSideMenu: MenuItem[] = [{title: 'Patients'}, {title: 'Prescriptions'}, {title: 'Stores'}];
  appTitle = 'Material Test';

  constructor(private breakpointObserver: BreakpointObserver) {
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
}
