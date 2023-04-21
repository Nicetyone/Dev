import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ViewChild('modal') modal: ElementRef;
  public header: string;
  public body: string;
  public image: string;


  types: {[key: string]: string[]} = {
    devteam: [
      "Dev Team", 
      "",
      "../../assets/img/persons/Daco_1297441.png"
    ],
    management: [
      "Management",
       "This is the dev team modal body",
       "../../assets/img/persons/Daco_1297818.png"
    ],
    adminteam: [
      "Admin Team",
      "This is the dev team modal body",
      "../../assets/img/persons/Daco_1309529.png"
    ],
    supportteam: [
      "Support Team",
      "This is the dev team modal body",
      "../../assets/img/persons/Daco_5635962.png"
    ]
  };

  toggleModal(type : string) {
    console.log('open modal child message: ' + type);
    this.header = this.types[type][0];
    this.body = this.types[type][1];
    this.image = this.types[type][2];
    this.modal.nativeElement.click();
  }
}
