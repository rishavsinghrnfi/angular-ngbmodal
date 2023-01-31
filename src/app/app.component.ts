import { Component } from '@angular/core';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalNewActivityComponent } from './modal-new-activity/modal-new-activity.component';

@Component({
  selector: 'my-app', 
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private anyData: any;
  private modalReference: any;
  constructor(private modalService: NgbModal,config: NgbModalConfig,) {
    config.backdrop = 'static';
		config.keyboard = false;
    
   }

  modalNewActivity() {
    this.modalReference =   this.modalService.open(ModalNewActivityComponent, { size: 'lg' });
    this.modalReference.componentInstance.anyDataForm = this.anyData; 
  }

  possibleOnCloseEvet() { 
    this.modalReference.close();
  }
  
}
