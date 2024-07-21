import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manzaba-detalle-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manzaba-detalle-estudiante.component.html',
  styleUrl: './manzaba-detalle-estudiante.component.css'
})
export class ManzabaDetalleEstudianteComponent {
  @Input() estudiante: string = '';
  @Input() apellido: string = '';
  @Input() edad: string = '';
  @Input() universidad: string = '';
  @Input() carrera: string = '';
  @Input() foto: string | ArrayBuffer | null = '';

  mostrarMallaCurricular() {
    const mallas: { [key: string]: string } = {
      'Ingeniería en Tecnologías de la Información': 'Malla curricular para Ingeniería en ITIN',
      'Ingeniería Agropecuaría': 'Malla curricular para Ingeniería Agropecuaría',
      'Ingeniería en Biotecnología': 'Malla curricular para Ingeniería en Biotecnología'
    };
    alert(mallas[this.carrera]);
    // Aqui va tu logica, o bueno la de ChatGPT jajajajajajajajajajajajajaja
  }
}
