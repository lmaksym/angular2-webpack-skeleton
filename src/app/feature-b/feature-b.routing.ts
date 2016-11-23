import {Routes, RouterModule} from '@angular/router';
import {FeatureBComponent} from './feature-b-component/feature-b.component';

const FEATURE_B_ROUTES: Routes = <Routes>[
    {path: '', component: FeatureBComponent}
];

export const featureBRouting = RouterModule.forChild(FEATURE_B_ROUTES);
