import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCheckComponent } from './input-check/input-check.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputDescriptionComponent } from './input-description/input-description.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputComponent } from './input2/input.component';
import { LabelComponent } from './label/label.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputCheckComponent,
    InputDateComponent,
    InputDescriptionComponent,
    InputTextComponent,
    InputComponent,
    LabelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputCheckComponent,
    InputDateComponent,
    InputDescriptionComponent,
    InputTextComponent,
    InputComponent,
    LabelComponent
  ]
})
export class SharedModule { }
