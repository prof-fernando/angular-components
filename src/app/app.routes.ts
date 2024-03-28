import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ContatoPageComponent } from '../pages/contato-page/contato-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'contato',
    component: ContatoPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
