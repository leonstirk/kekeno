import { Component } from '@angular/core';

import template from './about.component.html';
import style from './about.component.css';

@Component({
    selector: 'about',
    template,
    styles: [String(style)]
})
export class AboutComponent {}
