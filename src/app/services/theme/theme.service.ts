import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkTheme$ = new BehaviorSubject<boolean>(true)

  constructor() { }

  changeTheme(){
    this.isDarkTheme$.next(!this.isDarkTheme$.value)
  }
}
