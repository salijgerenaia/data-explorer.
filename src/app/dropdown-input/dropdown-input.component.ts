import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.css'],
})
export class DropdownInputComponent {
  submitForm() {
    throw new Error('Method not implemented.');
  }
  selectedOptions: string[] = [];

  options = [
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Peru', label: 'Peru' },
    { value: 'Ukraine', label: 'Ukraine' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Greece', label: 'Greece' },
    { value: 'Nigeria', label: 'Nigeria' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Brazil', label: 'Brazil' },
    { value: 'Morocco', label: 'Morocco' },
    { value: 'Egypt', label: 'Egypt' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Chile', label: 'Chile' },
    { value: 'Netherlands', label: 'Netherlands' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'Papua New Guinea', label: 'Papua New Guinea' },
    { value: 'Poland', label: 'Poland' },
    { value: 'Fiji', label: 'Fiji' },
  ];
  selectedOption: any;

  onSubmitForm() {
    console.log('Selected Options:', this.selectedOptions);
  }
}
