import {Component} from '@angular/core';

@Component({
    selector: 'app-feature-b',
    template: `
<h1>{{feature}}</h1>
`
})

export class FeatureBComponent {

    public feature: string = 'Hello from feature "B"';

}