import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaproyectoComponent } from './creaproyecto.component';

describe('CreaproyectoComponent', () => {
  let component: CreaproyectoComponent;
  let fixture: ComponentFixture<CreaproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
