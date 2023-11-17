import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { UppercaseInputComponent } from './uppercase-input/uppercase-input.component';
import { RoundedNumberInputComponent } from './rounded-number-input/rounded-number-input.component';
import { CalendarInputComponent } from './calendar-input/calendar-input.component';
import { DropdownInputComponent } from './dropdown-input/dropdown-input.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';


@NgModule({
  declarations: [
    AppComponent,
    UppercaseInputComponent,
    RoundedNumberInputComponent,
    CalendarInputComponent,
    DropdownInputComponent,
    DynamicTableComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
