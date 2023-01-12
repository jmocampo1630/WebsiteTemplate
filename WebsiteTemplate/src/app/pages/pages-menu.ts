import { MenuItem } from "../themes/model/MenuItem";

export const MENU_ITEMS: MenuItem[] = [
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
        name: 'about',
        icon: 'cached',
        path: 'about'
      },
      {
        name: 'Orange',
        icon: 'calendar_today',
        path: 'calendar_today2'
      },
    ],
  },
];
