/**
 * Created by iZel on 4/27/17.
 */

import { NgModule} from "@angular/core";
// import { ComponentsModule} from "../components/components.module"

import { ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AlertsRouter} from "./alerts.router";
import { AlertsComponents} from "./alerts.components";

@NgModule({
  imports:[
    AlertsRouter,
    ReactiveFormsModule,
    FormsModule
    // ComponentsModule
  ],
  declarations:[
    AlertsComponents
  ]
})

export class AlertsModule{}
