// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./authentication/register/register.component')
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('../app/components/dashbord-bc/dashbord-bc.component').then((c) => c.DashbordBcComponent)

      },
{
        path: 'reservation',
        loadComponent: () => import('../app/components/reservation/reservation.component').then((c) => c.ReservationComponent)

      },
{
        path: 'product',
        loadComponent: () => import('../app/components/product/product.component').then((c) => c.ProductComponent)

      },
{
        path: 'modeling',
        loadComponent: () => import('../app/components/modeling/modeling.component').then((c) => c.ModelingComponent)

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
