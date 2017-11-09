import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLocationComponent } from './call-location.component';

describe('CallLocationComponent', () => {
  let component: CallLocationComponent;
  let fixture: ComponentFixture<CallLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
