import {Component} from '@angular/core';

@Component({
    selector: 'app-feature-a',
    template: `
<h1>{{feature}}</h1>
`
})

export class FeatureAComponent {

    public feature: string = 'Hello from feature "A"';

}