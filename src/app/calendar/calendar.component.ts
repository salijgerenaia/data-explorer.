import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  @Output() dateTimeSelected = new EventEmitter<Date>();

  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);

  selectedHour: number | null = null;
  selectedMinute: number | null = null;
  selectedDate: Date | null = null;

  isDateTimeComplete: boolean = false;

  onDateSelected(event: any) {
    this.selectedDate = event.value;
    this.checkDateTimePicker();
  }

  onTimeSelected(event: any) {
    this.selectedHour = event.value;
    this.checkDateTimePicker();
  }

  onMinuteSelected(event: any) {
    this.selectedMinute = event.value;
    this.checkDateTimePicker();
  }

  checkDateTimePicker() {
    this.isDateTimeComplete =
      this.selectedDate !== null &&
      this.selectedHour !== null &&
      this.selectedMinute !== null;
  }

  submit() {
    if (this.isDateTimeComplete && this.selectedDate) {
      const dateWithTime = new Date(this.selectedDate);
      dateWithTime.setHours(this.selectedHour!);
      dateWithTime.setMinutes(this.selectedMinute!);
      console.log('DateTime:', dateWithTime);
      this.dateTimeSelected.emit(dateWithTime);
    }
  }
}
