import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashprogramComponent } from './carwashprogram.component';

describe('CarwashprogramComponent', () => {
  let component: CarwashprogramComponent;
  let fixture: ComponentFixture<CarwashprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarwashprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwashprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
