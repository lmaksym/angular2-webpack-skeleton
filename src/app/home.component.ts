import {Component} from '@angular/core';

@Component({
    selector: 'sk-app-home',
    template: `
<h1>{{title}}</h1>
`
})

export class HomeComponent {

    public title: string = 'Welcome to home component!';

}
