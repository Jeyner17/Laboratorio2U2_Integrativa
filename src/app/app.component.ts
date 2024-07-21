import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeltranFormularioComponent } from './beltran-formulario/beltran-formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BeltranFormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Laboratorio2U2';
}
