import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallPeopleComponent } from './call-people.component';

describe('CallPeopleComponent', () => {
  let component: CallPeopleComponent;
  let fixture: ComponentFixture<CallPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
