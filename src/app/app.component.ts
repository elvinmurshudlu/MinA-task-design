import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ThemeService} from "./services/theme/theme.service";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  isDarkMode = true


  @ViewChild(HeaderComponent) element !: ElementRef
  constructor(private themeServ:ThemeService) {
    themeServ.isDarkTheme$.subscribe(theme=>{
      this.isDarkMode = theme
    })
  }




}
