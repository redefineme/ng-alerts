/**
 * Created by iZel on 4/27/17.
 */
import {Component, OnInit} from "@angular/core";
import { NgAlertsService} from './services/ngAlertsService'
@Component({
  selector:'ng-alerts',
  templateUrl:'./ng-alerts.component.html',
  styleUrls:['./ng-alerts.css']
})

export class NgAlertsComponent implements OnInit{
  constructor(private alertsService:NgAlertsService){}
  alerts:any=[];
  queue:any=[];
  private _limit=5;
  private _countsAlerts=0;

  ngOnInit(){
    this.alertsService.eventAlerts.subscribe((alert)=>{
      if(this._countsAlerts < this._limit){
        this.alerts.unshift(alert);
        this._countsAlerts++;
      }else{
        this.queue.push(alert);
      }
    })
  }

  closed(e,alert){
    this._countsAlerts--;
    if(this.queue.length){
      this.alerts.unshift(this.queue.shift());
      this._countsAlerts++;
    }
  }
}
