import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(
    private breakPointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.breakPointObserver.observe(['(max-width: 800px)']).subscribe(res => {
      if (res.matches) {
        this.sideNav.mode = "over";
        this.sideNav.close();
      } else {
        this.sideNav.mode = "side";
        this.sideNav.open();
      }
      this.cdr.detectChanges();
    });
  }

}
