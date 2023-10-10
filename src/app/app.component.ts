import { Component } from '@angular/core';
import {ThemeService} from "./services/theme/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkMode = true

  constructor(private themeServ:ThemeService) {
    themeServ.isDarkTheme$.subscribe(theme=>{
      this.isDarkMode = theme
    })
  }


}
