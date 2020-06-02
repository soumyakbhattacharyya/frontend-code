import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureMessengerComponent } from './failure-messenger.component';

describe('FailureMessengerComponent', () => {
  let component: FailureMessengerComponent;
  let fixture: ComponentFixture<FailureMessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureMessengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
