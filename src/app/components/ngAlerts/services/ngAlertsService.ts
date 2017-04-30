/**
 * Created by iZel on 4/27/17.
 */
import {Injectable ,EventEmitter} from "@angular/core";
import { AlertModel} from "./alert.model";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class NgAlertsService{

  // eventAlerts = new EventEmitter();
  // eventOptions = new EventEmitter();
  eventAlerts:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  eventOptions:BehaviorSubject<any>= new BehaviorSubject<any>(null);
  private defaultOptions: AlertModel={};

  constructor(options?:AlertModel){
    Object.assign(this.defaultOptions,options);
    this.eventOptions.next(this.defaultOptions);
  }

  pushAlert(alert){

    this.eventAlerts.next({
      type:alert.type || 'success',
      msg:alert.msg || 'Undefined',
      timeout:alert.timeout || this.defaultOptions.timeout,
      place:this.defaultOptions.place,
      size:alert.size || this.defaultOptions.size,
      dismissible:true
    })
  }

  getOptions(){
    return this.defaultOptions;
  }

  setOptions(options : AlertModel){
    Object.assign(this.defaultOptions,options);
    this.eventOptions.next(this.defaultOptions);
  }

}
