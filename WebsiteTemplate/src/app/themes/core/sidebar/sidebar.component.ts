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

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
      },
      {
        name: 'Orange',
      },
    ],
  },
  {
    name: 'Fruit',
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
      },
      {
        name: 'Orange',
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
  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  hasChild = (_: number, node: FoodNode) =>
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
