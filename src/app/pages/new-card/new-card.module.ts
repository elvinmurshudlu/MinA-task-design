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
import {MapModule} from "../../shared/map/map.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    NewCardComponent,
    FormComponent,
    AnswersComponent,
  ],
  imports: [
    CommonModule,
    NewCardRoutingModule,
    ReactiveFormsModule,
    NgxBootstrapMultiselectModule,
    ColorPickerModule,
    OverlayPanelModule,
    ButtonModule,
    MapModule,
    HttpClientModule

  ],

})
export class NewCardModule { }
