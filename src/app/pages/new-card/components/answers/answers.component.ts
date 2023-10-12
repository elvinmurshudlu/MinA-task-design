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
export class AnswersComponent  implements AfterViewInit {

  data :IData[] = []

  constructor(private ansServ:AnswerService) {
  }
  ngAfterViewInit() {

    this.ansServ.addedAnswer.subscribe(m=>{

      this.data = [m as IData,...this.data]


    })
  }





}
