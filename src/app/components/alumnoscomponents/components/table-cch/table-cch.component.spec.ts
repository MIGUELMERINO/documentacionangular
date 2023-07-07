import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCchComponent } from './table-cch.component';

describe('TableCchComponent', () => {
  let component: TableCchComponent;
  let fixture: ComponentFixture<TableCchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
