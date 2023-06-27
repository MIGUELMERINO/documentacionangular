import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionComponentComponent } from './descripcion-component.component';

describe('DescripcionComponentComponent', () => {
  let component: DescripcionComponentComponent;
  let fixture: ComponentFixture<DescripcionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
