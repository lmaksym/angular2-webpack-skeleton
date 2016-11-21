import {Component} from '@angular/core';

@Component({
    selector: 'sk-feature-b',
    template: `
<h1>{{feature}}</h1>
`,
    styles: [`h1{
font-size: 25pt;
}`]
})

export class FeatureBComponent {

    public feature: string = 'Hello from feature "B"';

}
