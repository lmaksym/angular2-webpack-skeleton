import {Component} from '@angular/core';

@Component({
    selector: 'sk-app-menu',
    template: `
    <a [routerLink]="['/']">home</a>
    <a [routerLink]="['/feature-a']">feature-a</a>
    <a [routerLink]="['/feature-b']">feature-b</a>
`
})

export class MenuComponent {

}
