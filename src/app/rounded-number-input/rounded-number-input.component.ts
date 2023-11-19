import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rounded-number-input',
  templateUrl: './rounded-number-input.component.html',
  styleUrls: ['./rounded-number-input.component.css'],
})
export class RoundedNumberInputComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      roundedNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.min(0),
          this.roundToHundredsValidator,
        ],
      ],
    });
  }

  get roundedNumberInput() {
    return this.myForm.get('roundedNumber');
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted!');
    } else {
      console.log('Form invalid!');
    }
  }

  roundToHundredsValidator = (control: { value: any }) => {
    const value = parseInt(control.value, 10);
    if (value % 100 !== 0) {
      return { notRoundedToHundreds: true };
    }
    return null;
  };
}
