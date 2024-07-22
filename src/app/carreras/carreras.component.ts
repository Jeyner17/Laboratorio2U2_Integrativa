import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-carrera',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './carreras.component.html',
  styleUrl: './carreras.component.css'
})
export class CarreraComponent {

  @Input() seleccion: string = '';
  mostrarMensaje: boolean = false;

  toggleMensaje() {
    this.mostrarMensaje = !this.mostrarMensaje;
  }

  get mensajeCarrera(): string {
    switch (this.seleccion) {
      case 'Ingeniería en Tecnologías de la Información':
        return 'Has seleccionado Ingeniería en Tecnologías de la Información. ¡Gran elección!';
      case 'Ingeniería Agropecuaría':
        return 'Has seleccionado Ingeniería Agropecuaría. ¡Interesante campo!';
      case 'Ingeniería en Biotecnología':
        return 'Has seleccionado Ingeniería en Biotecnología. ¡Muy prometedor!';
      default:
        return 'Por favor selecciona una carrera.';
    }
  }

  get materiasCarrera(): string[] {
    switch (this.seleccion) {
      case 'Ingeniería en Tecnologías de la Información':
        return ['Algoritmos', 'Estructuras de Datos', 'Base de Datos', 'Redes'];
      case 'Ingeniería Agropecuaría':
        return ['Agronomía', 'Zoología', 'Fitotecnia', 'Maquinaria Agrícola'];
      case 'Ingeniería en Biotecnología':
        return ['Biología Molecular', 'Genética', 'Microbiología', 'Bioinformática'];
      default:
        return [];
    }
  }
}
