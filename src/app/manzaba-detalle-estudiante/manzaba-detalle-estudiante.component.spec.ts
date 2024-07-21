import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManzabaDetalleEstudianteComponent } from './manzaba-detalle-estudiante.component';

describe('ManzabaDetalleEstudianteComponent', () => {
  let component: ManzabaDetalleEstudianteComponent;
  let fixture: ComponentFixture<ManzabaDetalleEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManzabaDetalleEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManzabaDetalleEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
