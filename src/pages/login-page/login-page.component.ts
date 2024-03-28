import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavComponent, MatFormFieldModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {}
