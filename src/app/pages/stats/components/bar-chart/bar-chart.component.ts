import {Component, Input, OnInit} from '@angular/core';
import {ChartConfiguration, ChartOptions} from "chart.js";
import {IBarChart} from "../../../../Interfaces/interface";

@Component({
  selector: 'mina-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit{

  @Input() selectedChart :'pie' | 'bar' = 'bar'
  @Input() barColor = 'red'

  @Input() data :IBarChart= {}


  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  pieChartLegend = true;
  pieChartPlugins = [];


  barChartLegend = false;
  barChartPlugins = [];
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    backgroundColor:this.barColor

  };


  chartLabels:string[] = [ ];
  chartDatasets :{data:number[]}[] = [ {
    data: [ ],

  } ];


  ngOnInit() {
    this.barChartOptions= {
      responsive: false,
      backgroundColor:this.barColor

    };


    this.data.data?.forEach(m=>{
      this.chartLabels.push(m.label)
      this.chartDatasets[0].data.push(m.vote)
    })

    console.log(this.chartLabels,this.chartDatasets)
  }


}
