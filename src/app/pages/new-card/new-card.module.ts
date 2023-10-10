import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCardRoutingModule } from './new-card-routing.module';
import { NewCardComponent } from './new-card.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NewCardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    NewCardRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewCardModule { }
