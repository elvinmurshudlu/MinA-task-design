import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  addedAnswer = new Subject()

  addAnswer(data:any){
    this.addedAnswer.next(data)
  }

  constructor() { }
}
