import {Component} from '@angular/core';

@Component({
    selector: 'sk-feature-a',
    template: `
<h1>{{feature}}</h1>
`,
    styleUrls: ['./feature-a.components']
})

export class FeatureAComponent {

    public feature: string = 'Hello from feature "A"';

}
