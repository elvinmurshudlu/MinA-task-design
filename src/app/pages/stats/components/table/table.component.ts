import {AfterViewInit, Component, ElementRef, Input, SimpleChanges, ViewChild} from '@angular/core';
import {ColumnDefinition, Tabulator, Tabulator as TypeTabulator} from "tabulator-tables";
import {listOfResult} from "../../../../constants/list-of-results";


interface IData{
  color:string,
  answer:string

}
@Component({
  selector: 'mina-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit{
  @ViewChild('table') table !: ElementRef
  @Input() data = {}

  tabulatorTable !:TypeTabulator


  columns :ColumnDefinition[] = [
    {title:'#',field:'id',width:'10%',headerSort:false,resizable:false},
    {title:'Place Name',field:'label',width:'30%',headerSort:false ,resizable:false},
    {title:'Most answer',field:'answer',width:'60%',headerSort:false ,resizable:false},


  ]



  generateTable(){
    this.tabulatorTable = new Tabulator(this.table.nativeElement, {
      data:listOfResult.data,
      importFormat:"array",
      columns:this.columns,
    });

  }




  ngAfterViewInit() {
    this.generateTable()


  }




  protected readonly listOfResult = listOfResult;
}
