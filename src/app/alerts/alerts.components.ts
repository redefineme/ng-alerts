/**
 * Created by iZel on 4/27/17.
 */
import {Component} from "@angular/core";
import { NgAlertsService} from '../components/ngAlerts/services/ngAlertsService'
@Component({
  selector : 'alerts-component',
  templateUrl : './alerts.component.html'
})

export class AlertsComponents {
  constructor(private ngAlerts:NgAlertsService){
    this.ngAlerts.pushAlert({
      msg:'test',
    })
  }


  addAlert(){
    this.ngAlerts.pushAlert({
      msg:Date.now(),
    })
  }
}
