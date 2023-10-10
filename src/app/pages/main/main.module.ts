import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CardComponent } from './components/card/card.component';
import { AddCardComponent } from './components/add-card/add-card.component';


@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    AddCardComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
