import {Component, ElementRef, ViewChild} from '@angular/core';
import {cards} from "../../constants/cards";

@Component({
  selector: 'mina-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild('cardsContainer') cardContainer !: ElementRef
  elements = 19

  mainCards = cards.slice(0,this.elements)

  protected readonly Array = Array;

  onScroll(){
    const nativeElement = this.cardContainer.nativeElement


    if(nativeElement.clientHeight + Math.ceil(nativeElement.scrollTop) +2 >= nativeElement.scrollHeight  ){
      this.elements+=5
      this.mainCards = cards.slice(0,this.elements)
    }
  }

  protected readonly cards = cards;
}
