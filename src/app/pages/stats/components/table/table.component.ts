import {Component, ElementRef, Input, SimpleChanges, ViewChild} from '@angular/core';
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
export class TableComponent {
  @ViewChild('table') table !: ElementRef
  @Input() data = {}

  tabulatorTable !:TypeTabulator


  geoMapIcon = function(){
    return "<i class='pi pi-map-marker'></i>";
  };


  columns :ColumnDefinition[] = [
    {title:'#',field:'id',width:'10%',headerSort:false,resizable:false},
    {title:'Place Name',field:'label',width:'45%',headerSort:false ,resizable:false},
    {title:'Most answer',field:'answer',width:'45%',headerSort:false ,resizable:false},


  ]

  // data :IData[] = []





  // addRow(event:IData){
  //   if(this.modalData == null){
  //     const lastData  = this.tabulatorTable.getData()[0] as IData
  //     event.id = (lastData?.id || 0) +1
  //     this.tabulatorTable.addRow(event,true)
  //     this.messageService.add({ severity: 'success', summary: 'Added', detail: 'Row was added' });
  //   }else if(this.modalData){
  //     const olderData = this.modalData
  //     const newData = {...event}
  //     this.tabulatorTable.updateData([olderData,newData])
  //     this.messageService.add({ severity: 'success', summary: 'Changed', detail: 'Row was changed' });
  //
  //   }
  //   this.modalData = null
  // }

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


  ngOnChanges(changes: SimpleChanges) {
    // this.generateTable()
  }

  protected readonly listOfResult = listOfResult;
}
