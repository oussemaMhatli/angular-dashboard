export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard',
        icon: 'dashboard',
        breadcrumbs: false
      },
 {
        id: 'default',
        title: 'product',
        type: 'item',
        classes: 'nav-item',
        url: '/product',
        icon: 'product',
        breadcrumbs: false
      },
 {
        id: 'default',
        title: 'reservation',
        type: 'item',
        classes: 'nav-item',
        url: '/reservation',
        icon: 'reservation',
        breadcrumbs: false
      },
 {
        id: 'default',
        title: 'modeling',
        type: 'item',
        classes: 'nav-item',
        url: '/modeling',
        icon: 'modeling',
        breadcrumbs: false
      },

    ]
  },


];
