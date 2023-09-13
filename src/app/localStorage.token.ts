import {InjectionToken} from "@angular/core";

export const localStorageToken = new InjectionToken('local storage', {
  providedIn: 'root',
  factory(){
    return localStorage;
  },
})
