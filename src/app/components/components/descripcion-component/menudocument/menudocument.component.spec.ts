import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudocumentComponent } from './menudocument.component';

describe('MenudocumentComponent', () => {
  let component: MenudocumentComponent;
  let fixture: ComponentFixture<MenudocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenudocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
