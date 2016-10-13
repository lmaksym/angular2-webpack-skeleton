import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path:'feature-a', loadChildren:'app/feature-a/feature-a.module#FeatureAModule'}

];

export const routing = RouterModule.forRoot(APP_ROUTES);