/**
 * Created by iZel on 4/27/17.
 */
import {NgModule} from "@angular/core";
import { CommonModule} from "@angular/common";
import { NgAlertsComponent} from "./ngAlerts/ng-alerts.component";
import { AlertComponent} from "./ngAlerts/alert/alert.component";
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
  ]
})

export class ComponentsModule{}

export let AlertsComponents=[
  NgAlertsComponent,
  AlertComponent
]
