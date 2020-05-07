import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhysuperComponent } from './whysuper.component';

describe('WhysuperComponent', () => {
  let component: WhysuperComponent;
  let fixture: ComponentFixture<WhysuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhysuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhysuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
