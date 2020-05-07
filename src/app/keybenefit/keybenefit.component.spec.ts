import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeybenefitComponent } from './keybenefit.component';

describe('KeybenefitComponent', () => {
  let component: KeybenefitComponent;
  let fixture: ComponentFixture<KeybenefitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeybenefitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeybenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
