import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManzabaDetalleEstudianteComponent } from '../manzaba-detalle-estudiante/manzaba-detalle-estudiante.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beltran-formulario',
  standalone: true,
  imports: [FormsModule, ManzabaDetalleEstudianteComponent, CommonModule],
  templateUrl: './beltran-formulario.component.html',
  styleUrl: './beltran-formulario.component.css'
})
export class BeltranFormularioComponent {
  estudiante = '';
  edad='';
  apellido = '';
  universidad = 'Universidad de las Fuerzas Armadas - ESPE';
  cadena1="Ingreso de Estudiantes";
  seleccion= '';
  img = '../../logo_espe_2.png';
  fotoEstudiante: string | ArrayBuffer | null = '';
  mostrarDetalles = false;

  onClick() {
    this.mostrarDetalles = true;
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.fotoEstudiante = reader.result;
      };
    }
  }
}
