import {Component, Input} from '@angular/core';
import {ICard} from "../../../../Interfaces/interface";

@Component({
  selector: 'mina-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card :ICard = {}

}
