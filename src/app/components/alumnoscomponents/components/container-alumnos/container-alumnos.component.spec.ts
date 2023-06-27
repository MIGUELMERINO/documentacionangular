import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAlumnosComponent } from './container-alumnos.component';

describe('ContainerAlumnosComponent', () => {
  let component: ContainerAlumnosComponent;
  let fixture: ComponentFixture<ContainerAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
