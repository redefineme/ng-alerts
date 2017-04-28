/**
 * Created by iZel on 4/27/17.
 */
import {NgModule} from "@angular/core";
import { CommonModule} from "@angular/common";
import { NgAlertsComponent} from "./ngAlerts/ng-alerts.component";
import { AlertComponent} from "./ngAlerts/alert/alert.component";
import { AlertModel} from './ngAlerts/services/alert.model'
@NgModule({
  imports:[
    CommonModule
  ],
  exports:[
    NgAlertsComponent,
    AlertComponent
  ],
  declarations:[
    NgAlertsComponent,
    AlertComponent
  ],
  providers:[
    AlertModel
  ]
})

export class ComponentsModule{}

export let AlertsComponents=[
  NgAlertsComponent,
  AlertComponent
]
