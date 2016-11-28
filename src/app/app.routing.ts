import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'feature-a', loadChildren: './feature-a/feature-a.module#FeatureAModule'},
    {path: 'feature-b', loadChildren: './feature-b/feature-b.module#FeatureBModule'}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
