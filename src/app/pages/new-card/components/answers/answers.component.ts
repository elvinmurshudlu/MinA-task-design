import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {Tabulator as TypeTabulator, TabulatorFull as Tabulator,ColumnDefinition} from 'tabulator-tables';
import {AnswerService} from "../../../../services/add-answer/answer.service";
interface IData{
  color:string,
  answer:string

}

@Component({
  selector: 'mina-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent  implements AfterViewInit ,OnChanges{
  @ViewChild('table') table !: ElementRef

  tabulatorTable !:TypeTabulator


  geoMapIcon = function(){
    return "<i class='pi pi-map-marker'></i>";
  };


  columns :ColumnDefinition[] = [
    {title:'Color',field:'color',width:'30%',headerSort:false,resizable:false},
    {title:'Answers',field:'answer',width:'30%',headerSort:false ,resizable:false},
    {title:"Operations",formatter:this.geoMapIcon, width:'40%',hozAlign:"center",headerSort:false,resizable:false,cellClick:(e,cell)=>{
      }},

  ]

  data :IData[] = []





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
    // this.tabulatorTable = new Tabulator(this.table.nativeElement, {
    //   data:this.data,
    //   importFormat:"array",
    //   columns:this.columns,
    // });

  }


  constructor(private ansServ:AnswerService) {
  }

  ngAfterViewInit() {
    this.generateTable()

    this.ansServ.addedAnswer.subscribe(m=>{
      // console.log(m)

      this.data = [m as IData,...this.data]

      // this.tabulatorTable.addRow(m as IData,true)
    })
  }


  ngOnChanges(changes: SimpleChanges) {
    // this.generateTable()
  }


}
