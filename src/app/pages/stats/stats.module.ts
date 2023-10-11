import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import {MapModule} from "../../shared/map/map.module";
import { GraphContainerComponent } from './components/graph-container/graph-container.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import {NgChartsModule} from "ng2-charts";
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    StatsComponent,
    GraphContainerComponent,
    BarChartComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule,
    MapModule,
    NgChartsModule
  ]
})
export class StatsModule { }
