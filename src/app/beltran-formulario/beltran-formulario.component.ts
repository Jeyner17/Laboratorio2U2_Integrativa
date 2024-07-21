import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-beltran-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './beltran-formulario.component.html',
  styleUrl: './beltran-formulario.component.css'
})
export class BeltranFormularioComponent {
  estudiante = '';
  edad='';
  apeliido = '';
  universidad = 'Universidad de las Fuerzas Armadas - ESPE';
  cadena1="Ingreso de Estudiantes";
  seleccion= '';
  img = '../../logo_espe.png';

  onClick() {
    alert(`Bienvenido ${this.estudiante} ${this.apeliido} a la ${this.universidad}, 
      usted ha seleccionado la carrera de ${this.seleccion} y tengo ${this.edad}`);
    this.estudiante = ''; 
    this.seleccion = '';
    this.apeliido = '';
    this.edad = '';
  }
}
