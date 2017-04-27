/**
 * Created by iZel on 4/27/17.
 */

import { NgModule} from "@angular/core";
// import { ComponentsModule} from "../components/components.module"
import { AlertsRouter} from "./alerts.router";
import { AlertsComponents} from "./alerts.components";

@NgModule({
  imports:[
    AlertsRouter,
    // ComponentsModule
  ],
  declarations:[
    AlertsComponents
  ]
})

export class AlertsModule{}
