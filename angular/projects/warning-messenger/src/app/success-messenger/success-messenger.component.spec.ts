import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMessengerComponent } from './success-messenger.component';

describe('SuccessMessengerComponent', () => {
  let component: SuccessMessengerComponent;
  let fixture: ComponentFixture<SuccessMessengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessMessengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
