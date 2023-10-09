import { Component } from '@angular/core';
import {settings} from "../../constants/settings"
import {menu} from "../../constants/menu"
import {user} from "../../constants/user"
import {ThemeService} from "../../services/theme/theme.service";


@Component({
  selector: 'mina-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private themeServ:ThemeService) {
  }

  changeMode(){
    this.themeServ.changeTheme()
  }

  protected readonly settings = settings;
  protected readonly menu = menu;
  protected readonly user = user;
}
