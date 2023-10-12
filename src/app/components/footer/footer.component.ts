import { Component } from '@angular/core';
import {settings} from "../../constants/settings";
import {footerMenu} from "../../constants/footer";

@Component({
  selector: 'mina-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


  protected readonly settings = settings;
  protected readonly footerMenu = footerMenu;
}
