import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { LayoutComponent } from './core/layout/layout.component';
import { MaterialImportModule } from '../shared/module/material-import.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialImportModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class ThemesModule { }
