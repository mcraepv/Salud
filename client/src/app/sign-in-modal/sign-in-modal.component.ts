import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.css'],
})
export class SignInModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  checkCredentials() {
    return this.activeModal.close('Close click');
  }

  ngOnInit(): void {}
}
