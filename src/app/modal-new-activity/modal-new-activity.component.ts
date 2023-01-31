import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-new-activity',
  templateUrl: './modal-new-activity.component.html',
  styleUrls: ['./modal-new-activity.component.css'],
})
export class ModalNewActivityComponent implements OnInit {
  @Input() anyDataForm: any;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  close() {
    this.activeModal.close();
    console.log('hello');
  }
}
