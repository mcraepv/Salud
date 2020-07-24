import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
})
export class RegisterModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService
  ) {}

  registerUser(email, password): void {
    this.authService.register(email, password);
    this.activeModal.close('Close click');
  }

  ngOnInit(): void {}
}
