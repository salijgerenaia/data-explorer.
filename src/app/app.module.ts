import { CalendarComponent } from './calendar/calendar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { UppercaseInputComponent } from './uppercase-input/uppercase-input.component';
import { RoundedNumberInputComponent } from './rounded-number-input/rounded-number-input.component';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataComponent } from './data/data.component';
import { DateTimePickerModule, MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseInputComponent,
    RoundedNumberInputComponent,
    DropdownInputComponent,
    HeaderComponent,
    DataComponent,
    CalendarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    DateTimePickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
