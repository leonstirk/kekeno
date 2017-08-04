import { Component } from '@angular/core';
import { Parallax, ParallaxConfig } from '../../../../node_modules/ng2-parallax/dist/ts/commonjs/parallax.directive';

import template from './home.component.html';
import style from './home.component.css';

@Component({
  selector: 'home',
  template,
  styles: [String(style)]
})

export class HomeComponent {
  parallaxConfig: ParallaxConfig = {
    initialValue: 50,
    ratio: -0.3
  };

  constructor() {}
}
