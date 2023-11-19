import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

function uppercaseValidator(control: { value: any }) {
  const value = control.value;
  if (value && value !== value.toUpperCase()) {
    return { notUppercase: true };
  }
  return null;
}

@Component({
  selector: 'app-uppercase-input',
  templateUrl: './uppercase-input.component.html',
  styleUrls: ['./uppercase-input.component.css'],
})
export class UppercaseInputComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      uppercaseInput: [
        '',
        [Validators.required, Validators.pattern('[A-Z]*'), uppercaseValidator],
      ],
    });
  }

  get uppercaseInput() {
    return this.myForm.get('uppercaseInput');
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted!');
    } else {
      console.log('Form invalid!');
    }
  }
}
