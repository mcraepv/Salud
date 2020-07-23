import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  open(): void {
    const modalRef = this.modalService.open(SignInModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit(): void {}
}
