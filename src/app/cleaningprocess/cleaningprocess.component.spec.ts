import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningprocessComponent } from './cleaningprocess.component';

describe('CleaningprocessComponent', () => {
  let component: CleaningprocessComponent;
  let fixture: ComponentFixture<CleaningprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
