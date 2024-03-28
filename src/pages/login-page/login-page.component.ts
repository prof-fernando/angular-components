import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    NavComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  //emailControl = new FormControl('valor padrao');

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  autenticar() {
    // console.log('click botao');
    // console.log(this.loginForm.get('email')?.value);
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const { email, senha } = this.loginForm.value;
      console.log('teste', email, senha);
    }
    return false;
  }
}
