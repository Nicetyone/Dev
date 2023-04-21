import {Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @ViewChild('contactPopup') contactPopup: ElementRef;

  openContactPopup() {
    console.log(this.contactPopup);
    this.contactPopup.nativeElement.style.display = 'block';
  }
}
