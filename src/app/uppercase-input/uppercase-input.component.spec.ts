import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercaseInputComponent } from './uppercase-input.component';

describe('UppercaseInputComponent', () => {
  let component: UppercaseInputComponent;
  let fixture: ComponentFixture<UppercaseInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UppercaseInputComponent]
    });
    fixture = TestBed.createComponent(UppercaseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
