// dynamic-table.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  @Input() data: any[] = [];
  filteredData: any[] = [];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      const inputValue = filterValue.trim().toLowerCase();
      this.filteredData = this.data.filter(item =>
        item.name.toLowerCase().includes(inputValue) ||
        item.category.toLowerCase().includes(inputValue)
      );
    } else {
      this.filteredData = this.data; // Reset filter if input is empty
    }
  }
}
