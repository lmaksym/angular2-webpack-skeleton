import {Component} from '@angular/core'

@Component({
    selector:'app-home',
    template:`
<h1>{{title}}</h1>
`
})

export class  HomeComponent{

    public title: string = 'Welcome to home component!';

}