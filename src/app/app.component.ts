import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onTimeSelected($event: Event) {
    throw new Error('Method not implemented.');
  }
  title(title: any) {}
}
