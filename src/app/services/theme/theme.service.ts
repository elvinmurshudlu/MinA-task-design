import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkTheme$ = new BehaviorSubject<boolean>(localStorage.getItem('theme') !=='light')
  constructor() { }

  changeTheme(){
    localStorage.setItem('theme',this.isDarkTheme$.value ?'light' : 'dark')
    this.isDarkTheme$.next(!this.isDarkTheme$.value)
  }
}
