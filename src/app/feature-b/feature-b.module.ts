
import {NgModule} from "@angular/core";
import {featureBRouting} from "./feature-b.routing";
import {FeatureBComponent} from "./feature-b-component/feature-b.component";

@NgModule({
  declarations:[
    FeatureBComponent
  ],
  imports:[featureBRouting]
})

export class FeatureBModule{

}