import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.css']
})
export class DropdownInputComponent {
submitForm() {
throw new Error('Method not implemented.');
}
  selectedOptions: string[] = [];

  options = [
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Greece', label: 'Greece' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Ukraine', label: 'Ukraine' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'Poland', label: 'Poland' },
    { value: 'Netherlands', label: 'Netherlands' },

  ];
selectedOption: any;

  onSubmitForm() {
    console.log('Selected Options:', this.selectedOptions);
    // You can perform further actions with the selected options here
  }
}
