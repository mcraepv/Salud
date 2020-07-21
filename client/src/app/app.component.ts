import { Component } from '@angular/core';
import { SidenavTogglerService } from './sidenav-toggler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public SidenavTogglerService: SidenavTogglerService) {}
  title = 'client';
}
