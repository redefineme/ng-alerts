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

  msg:string='Messages';
  type:string='success';
  timeout:number=3000;

  constructor(private ngAlerts:NgAlertsService){
    this.addAlert()
  }


  addAlert(){
    this.ngAlerts.pushAlert({
      msg:this.msg,
      type:this.type,
      timeout:this.timeout
    })
  }

  alert(type){
    this.type=type;
    this.addAlert();
  }

  place(place){
    this.ngAlerts.setOptions({
      place:place
    });
    this.addAlert();
  }

  size(size){
    this.ngAlerts.setOptions({
      size:size
    });
    this.addAlert();
  }
}
