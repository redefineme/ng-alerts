/**
 * Created by iZel on 4/27/17.
 */
import {Component, OnInit,ViewEncapsulation} from "@angular/core";
import { NgAlertsService} from './services/ngAlertsService'
import { AlertModel} from './services/alert.model'
@Component({
  selector:'[ng-alerts]',
  templateUrl:'./ng-alerts.component.html',
  styleUrls:['./ng-alerts.css'],
  encapsulation:ViewEncapsulation.None
})

export class NgAlertsComponent implements OnInit{

  options:any={};
  alerts:any=[];
  queue:any=[];
  private _limit=5;
  private _countsAlerts=0;

  constructor(private alertsService:NgAlertsService){
    // this.options = this.alertsService.getOptions();
  }

  ngOnInit(){
    this.alertsService.eventAlerts.subscribe((alert)=>{
      if(alert){
        if(this._countsAlerts < this._limit){
          this.alerts.unshift(alert);
          this._countsAlerts++;
        }else{
          this.queue.push(alert);
        }
      }
    });
    // this.options = this.alertsService.getOptions();

    this.alertsService.eventOptions.subscribe((options:AlertModel)=>{
      if(options){
        console.log(options)
        this.options=options;
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

