import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCardRoutingModule } from './new-card-routing.module';
import { NewCardComponent } from './new-card.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxBootstrapMultiselectModule} from "ngx-bootstrap-multiselect";
import { AnswersComponent } from './components/answers/answers.component';
import {ColorPickerModule} from "primeng/colorpicker";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ButtonModule} from "primeng/button";
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    NewCardComponent,
    FormComponent,
    AnswersComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    NewCardRoutingModule,
    ReactiveFormsModule,
    NgxBootstrapMultiselectModule,
    ColorPickerModule,
    OverlayPanelModule,
    ButtonModule,

  ],

})
export class NewCardModule { }
