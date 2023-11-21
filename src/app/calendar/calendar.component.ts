import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  @Output() dateTimeSelected = new EventEmitter<string>();

  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);

  selectedHour: number = 0;
  selectedMinute: number = 0;
  selectedDate: Date | null = null;

  onDateSelected(event: any) {
    this.selectedDate = event.value;
    this.emitDateTime();
  }

  onTimeSelected(event: any) {
    this.selectedHour = event.value;
    this.emitDateTime();
  }

  onMinuteSelected(event: any) {
    this.selectedMinute = event.value;
    this.emitDateTime();
  }

  emitDateTime() {
    if (this.selectedDate) {
      const formattedDate = new Date(this.selectedDate);
      formattedDate.setHours(this.selectedHour);
      formattedDate.setMinutes(this.selectedMinute);

      this.dateTimeSelected.emit(formattedDate.toISOString());
    }
  }
}
