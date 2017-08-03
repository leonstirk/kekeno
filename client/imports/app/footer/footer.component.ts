import { Component } from '@angular/core';

import template from './footer.component.html';
import style from './footer.component.css';

@Component({
  selector: 'footer',
  template,
  styles: [String(style)]
})
export class FooterComponent {
  goToTop(){
    window.scrollTo(0,0);
  }
}
