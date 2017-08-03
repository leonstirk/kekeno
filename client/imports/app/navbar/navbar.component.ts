import { Component } from '@angular/core';

import template from './navbar.component.html';
import style from './navbar.component.css';

@Component({
    selector: 'navbar',
    template,
    styles: [String(style)]
})
export class NavbarComponent {}
