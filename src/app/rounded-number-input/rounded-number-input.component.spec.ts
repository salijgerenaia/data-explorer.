import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedNumberInputComponent } from './rounded-number-input.component';

describe('RoundedNumberInputComponent', () => {
  let component: RoundedNumberInputComponent;
  let fixture: ComponentFixture<RoundedNumberInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundedNumberInputComponent]
    });
    fixture = TestBed.createComponent(RoundedNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
