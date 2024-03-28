import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-contato-page',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './contato-page.component.html',
  styleUrl: './contato-page.component.scss',
})
export class ContatoPageComponent {}
