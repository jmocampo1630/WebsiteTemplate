import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MenuItem } from '../../model/MenuItem';


const TREE_DATA: MenuItem[] = [
  {
    name: 'Home',
    icon: 'home',
    path: 'home'
  },
  {
    name: 'Vegetables',
    icon: 'build',
    children: [
      {
        name: 'Green',
        icon: 'cached',
        path: 'cached'
      },
      {
        name: 'Orange',
        icon: 'calendar_today',
        path: 'calendar_today'
      },
    ],
  },
  {
    name: 'Vegetables',
    icon: 'build',
    children: [
      {
        name: 'Green',
        icon: 'cached',
        path: 'cached2'
      },
      {
        name: 'Orange',
        icon: 'calendar_today',
        path: 'calendar_today2'
      },
    ],
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slideVertical', [
      state(
        '*',
        style({
          height: 0,
        })
      ),
      state(
        'show',
        style({
          height: '*',
        })
      ),
      transition('* => *', [animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<MenuItem>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<MenuItem>();
  hasChild = (_: number, node: MenuItem) =>
    !!node.children && node.children.length > 0;

  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  panelOpenState = false;
  constructor(
    private breakPointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.breakPointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
      this.cdr.detectChanges();
    });
  }
}
