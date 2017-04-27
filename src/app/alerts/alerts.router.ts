/**
 * Created by iZel on 4/27/17.
 */
import { NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AlertsComponents } from './alerts.components';

const routes:Routes=[
  {
    path: '',
    data: {
      title: 'Alerts'
    },
    component:AlertsComponents
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class AlertsRouter {}
