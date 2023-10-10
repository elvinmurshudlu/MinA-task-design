import { Component } from '@angular/core';
import {cards} from "../../constants/cards";

@Component({
  selector: 'mina-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  mainCards = cards

  protected readonly Array = Array;
}
