import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.css'],
})
export class SignInModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  checkCredentials(email, password): void {
    this.authService.login(email, password);
    this.activeModal.close('Close click');
  }

  register(): void {
    this.activeModal.close('Close click');
    const modalRef = this.modalService.open(RegisterModalComponent);
    modalRef.componentInstance.name = 'Register';
  }

  ngOnInit(): void {}
}
