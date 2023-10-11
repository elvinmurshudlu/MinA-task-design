import { Component } from '@angular/core';
import {top10Desc} from "../../../../constants/top-10-desc";
import {top10Ascending} from "../../../../constants/top-10-ascending";
import {listOfResult} from "../../../../constants/list-of-results";
import {allPie} from "../../../../constants/all-pie-chart";

@Component({
  selector: 'mina-graph-container',
  templateUrl: './graph-container.component.html',
  styleUrls: ['./graph-container.component.scss']
})
export class GraphContainerComponent {


  protected readonly top10Ascending = top10Ascending;
  protected readonly top10Desc = top10Desc;
  protected readonly allPie = allPie;
}
