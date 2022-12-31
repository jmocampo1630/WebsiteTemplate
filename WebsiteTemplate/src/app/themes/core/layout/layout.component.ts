import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidebarComponent') sidebarComponent!: SidebarComponent;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarComponent.sideNav.toggle();
  }
}
