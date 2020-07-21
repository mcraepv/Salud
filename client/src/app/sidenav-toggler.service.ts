import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavTogglerService {
  constructor() {}

  toggled: boolean = false;

  toggleSidenav(): void {
    this.toggled = !this.toggled;
  }
}
