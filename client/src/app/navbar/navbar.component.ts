import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  open() {
    this.router.navigateByUrl('/about');
  }
}
