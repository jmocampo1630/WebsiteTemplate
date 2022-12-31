import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemesModule } from '../themes/themes.module';
import { HomeComponent } from './home/home.component';
import { MaterialImportModule } from '../shared/module/material-import.module';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemesModule,
    MaterialImportModule
  ]
})
export class PagesModule { }
