import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedSideNavService {
  hideSideNav: boolean = false;
  constructor() { }
  toggleSideNav(): void {
    console.log("Hi")
    this.hideSideNav = !this.hideSideNav
  }
}
