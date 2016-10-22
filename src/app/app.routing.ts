import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {HomeComponent} from "./home.component";
import {FeatureAModule} from './feature-a/feature-a.module';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path:'feature-a', loadChildren:'./feature-a/feature-a.module#FeatureAModule'}

];

export const routing = RouterModule.forRoot(APP_ROUTES,{ preloadingStrategy: PreloadAllModules });