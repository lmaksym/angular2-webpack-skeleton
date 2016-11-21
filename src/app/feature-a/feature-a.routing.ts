
import {Routes, RouterModule} from '@angular/router';
import {FeatureAComponent} from './feature-a-component/feature-a.component';

const FEATURE_A_ROUTES: Routes = <Routes>[
    {path: '', component: FeatureAComponent}
];

export const featureARouting  = RouterModule.forChild(FEATURE_A_ROUTES);
