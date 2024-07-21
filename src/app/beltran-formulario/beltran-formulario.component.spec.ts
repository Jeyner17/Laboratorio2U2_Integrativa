import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeltranFormularioComponent } from './beltran-formulario.component';

describe('BeltranFormularioComponent', () => {
  let component: BeltranFormularioComponent;
  let fixture: ComponentFixture<BeltranFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeltranFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeltranFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
