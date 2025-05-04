import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationItem } from '../theme/layouts/admin-layout/navigation/navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigationItems: NavigationItem[] = [
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
          id: 'product',
          title: 'Product',
          type: 'item',
          classes: 'nav-item',
          url: '/product',
          icon: 'dashboard',
          breadcrumbs: false,
          hidden: true
        },
        {
          id: 'reservation',
          title: 'Reservation',
          type: 'item',
          classes: 'nav-item',
          url: '/reservation',
          icon: 'dashboard',
          breadcrumbs: false,
          hidden: true
        },
        {
          id: 'modeling',
          title: 'Modeling',
          type: 'item',
          classes: 'nav-item',
          url: '/modeling',
          icon: 'dashboard',
          breadcrumbs: false,
          hidden: true
        }
      ]
    }
  ];

  private navigationSubject = new BehaviorSubject<NavigationItem[]>(this.getNavigationItems());
  navigation$: Observable<NavigationItem[]> = this.navigationSubject.asObservable();

  constructor() {
    // Watch for localStorage changes (e.g., via window event or polling)
    window.addEventListener('storage', () => this.updateNavigation());
    this.updateNavigation(); // Initial update
  }

  private getNavigationItems(): NavigationItem[] {
    const businessType = localStorage.getItem('selectedBusiness') || 'default';
    return this.transformNavigationItems(businessType);
  }

  private transformNavigationItems(businessType: string): NavigationItem[] {
    if (businessType !== 'customer') {
      return this.navigationItems; // Return default items
    }

    // Deep clone to avoid mutating original
    const transformedItems: NavigationItem[] = JSON.parse(JSON.stringify(this.navigationItems));

    // Transform for 'customer' business type
    transformedItems.forEach(group => {
      if (group.children) {
        group.children = group.children.map(item => {
          if (item.id === 'default') {
            return {
              ...item,
              id: 'dashboardcustomer',
              title: 'Customer Dashboard',
              url: '/dashboardcustomer'
            };
          }
          if (['product', 'reservation', 'modeling'].includes(item.id)) {
            return {
              ...item,
              id: `${item.id}customer`,
              title: `${item.title} Customer`,
              url: `/${item.id}customer`,
              hidden: false // Show these items for customer
            };
          }
          return item;
        });
      }
    });

    return transformedItems;
  }

  private updateNavigation() {
    this.navigationSubject.next(this.getNavigationItems());
  }

  // Call this when business type changes
  setBusinessType(businessType: string) {
    localStorage.setItem('selectedBusiness', businessType);
    this.updateNavigation();
  }
}
