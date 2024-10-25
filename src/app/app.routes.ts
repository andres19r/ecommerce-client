import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './shopping/pages/home/home.component';
import {
  AboutComponent,
  CartViewComponent,
  CatalogComponent,
  ContactComponent,
  WelcomeComponent,
} from './shopping/components';
import { validateTokenGuard } from './auth/guards/validate-token.guard';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [validateTokenGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'catalog',
        component: CatalogComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'cart',
        component: CartViewComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
