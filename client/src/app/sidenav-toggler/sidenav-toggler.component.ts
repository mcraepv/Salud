import { Component, OnInit } from '@angular/core';
import { SidenavTogglerService } from '../sidenav-toggler.service';

@Component({
  selector: 'app-sidenav-toggler',
  templateUrl: './sidenav-toggler.component.html',
  styleUrls: ['./sidenav-toggler.component.css'],
})
export class SidenavTogglerComponent implements OnInit {
  constructor(public SidenavTogglerService: SidenavTogglerService) {}

  ngOnInit(): void {}
}
