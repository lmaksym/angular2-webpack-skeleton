import {Routes, RouterModule} from '@angular/router';
import {FeatureBComponent} from './feature-b-component/feature-b.component';

const FEATURE_A_ROUTES: Routes = <Routes>[
    {path: '', component: FeatureBComponent}
];

export const featureBRouting = RouterModule.forChild(FEATURE_A_ROUTES);
