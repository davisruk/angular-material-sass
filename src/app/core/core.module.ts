import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { uiStateReducer } from '../state/ui.state';
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
import { AppNavComponent } from 'src/app/app-nav/app-nav.component';
import { ThemePickerComponent } from 'src/app/theme-picker/theme-picker.component';
import { ContentComponent } from 'src/app/content/content.component';

@NgModule({
  imports: [
    CommonModule,
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
    StoreModule.forRoot({ ui: uiStateReducer })
  ],
  exports: [
    CommonModule,
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
    ThemePickerComponent,
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
    ContentComponent
],
  providers: [],
  entryComponents: [ThemePickerComponent]
})
export class CoreModule { }
