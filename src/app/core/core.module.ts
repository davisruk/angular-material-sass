import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { MatToolbarModule,
         MatButtonModule,
         MatSidenavModule,
         MatIconModule,
         MatListModule,
         MatSlideToggleModule,
         MatFormFieldModule,
         MatSelectModule,
         MatMenuModule,
         MatGridListModule,
         MatCardModule,
         MatCheckboxModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatInputModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppNavComponent } from 'src/app/components/app-nav/app-nav.component';
import { ThemePickerComponent } from 'src/app/components/theme-picker/theme-picker.component';
import { ContentComponent } from 'src/app/components/content/content.component';
import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { LandingComponent } from '../components/landing/landing.component';
import { MainContentComponent } from '../components/main-content/main-content.component';
import { AuthenticationService } from '../services/authentication.service';
import { AuthEffects } from '../state/effects/auth-effects';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../state/app.state';
import { AuthGuardService } from '../services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    RouterModule.forRoot([
      { path: 'log-in', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', component: LandingComponent },
      { path: 'content', component: MainContentComponent, canActivate: [AuthGuardService] },
      { path: '**', redirectTo: '/'}
    ])
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppNavComponent,
    LandingComponent,
    ThemePickerComponent,
    MainContentComponent,
    FlexLayoutModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ContentComponent
  ],
  declarations: [
    AppNavComponent,
    ThemePickerComponent,
    ContentComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    MainContentComponent
],
  providers: [],
  entryComponents: [ThemePickerComponent]
})
export class CoreModule { }
