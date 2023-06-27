import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadalumnosComponent } from './actividadalumnos.component';

describe('ActividadalumnosComponent', () => {
  let component: ActividadalumnosComponent;
  let fixture: ComponentFixture<ActividadalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
