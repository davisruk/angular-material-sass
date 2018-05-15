import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
         MatButtonModule,
         MatSidenavModule,
         MatIconModule,
         MatListModule,
         MatSlideToggleModule,
         MatFormFieldModule,
         MatSelectModule,
         MatMenuModule,
        MatGridListModule
       } from '@angular/material';
import { CoreModule } from './core/core.module';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    ThemePickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    CoreModule
  ],
  providers: [],
  entryComponents: [ThemePickerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
