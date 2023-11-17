import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  data = [
    { id: 1, country: 'Georgia', region: 'Europe' },
    { id: 2, country: 'Canada', region: 'North America' },
    { id: 3, country: 'Peru', region: 'South America' },
    { id: 4, country: 'Ukraine', region: 'Europe' },
    { id: 5, country: 'Germany', region: 'Europe' },
    { id: 6, country: 'Indonesia', region: 'Asia' },
    { id: 7, country: 'Greece', region: 'Europe' },
    { id: 8, country: 'Nigeria', region: 'Africa' },
    { id: 9, country: 'Australia', region: 'Oceania' },
    { id: 10, country: 'Brazil', region: 'South America' },
    { id: 11, country: 'Morocco', region: 'Africa' },
    { id: 12, country: 'Egypt', region: 'Africa' },
    { id: 13, country: 'Spain', region: 'Europe' },
    { id: 14, country: 'Chile', region: 'South America' },
    { id: 15, country: 'Netherlands', region: 'Europe' },
    { id: 16, country: 'Mexico', region: 'North America' },
    { id: 17, country: 'United Kingdom', region: 'Europe' },
    { id: 18, country: 'Papua New Guinea', region: 'North America' },
    { id: 19, country: 'Poland', region: 'Europe' },
    { id: 20, country: 'Fiji', region: 'Oceania' },
  ];

  filteredData: any[] = [];

  constructor() {
    this.filteredData = [...this.data];
  }

  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filterValue = inputElement.value.trim().toLowerCase();
    this.filteredData = this.data.filter(
      (item) =>
        item.country.toLowerCase().includes(filterValue) ||
        item.region.toLowerCase().includes(filterValue)
    );
  }
}
