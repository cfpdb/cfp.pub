import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallImportantDatesComponent } from './call-important-dates.component';

describe('CallImportantDatesComponent', () => {
  let component: CallImportantDatesComponent;
  let fixture: ComponentFixture<CallImportantDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallImportantDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallImportantDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
