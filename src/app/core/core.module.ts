import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/core/services/theme.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ],
  declarations: [],
  providers: [ThemeService]
})
export class CoreModule { }
