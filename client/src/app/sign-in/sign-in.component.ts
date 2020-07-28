import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isMenuCollapsed: boolean;

  constructor(
    private modalService: NgbModal,
    public authService: AuthService
  ) {}

  open(): void {
    const modalRef = this.modalService.open(SignInModalComponent);
    modalRef.componentInstance.name = 'Sign In';
  }

  ngOnInit(): void {}
}
