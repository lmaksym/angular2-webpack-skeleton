
import {NgModule} from "@angular/core";
import {featureARouting} from "./feature-a.routing";
import {FeatureAComponent} from "./feature-a-component/feature-a.component";

@NgModule({
  declarations:[
    FeatureAComponent
  ],
  imports:[featureARouting]
})

export class FeatureAModule{

}