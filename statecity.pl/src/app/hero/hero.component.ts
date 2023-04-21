import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  
    @ViewChild(ModalComponent) modal: ModalComponent;

    constructor() { }
  
    ngOnInit(): void {
    }

    callModal(type : string){
      console.log('call modal parent message');
      this.modal.toggleModal(type);
    }
  
}
