/**
 * Created by iZel on 4/27/17.
 */
import {Injectable ,EventEmitter} from "@angular/core";
import { AlertModel} from "./alert.model";
@Injectable()

export class NgAlertsService{

  eventAlerts = new EventEmitter();
  eventOptions = new EventEmitter();

  private defaultOptions: any={};

  constructor(options?:AlertModel){
    Object.assign(this.defaultOptions,options)
  }

  pushAlert(alert){
    this.eventAlerts.emit({
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
    Object.assign(this.defaultOptions,options)
    this.eventOptions.emit(this.defaultOptions)
  }

}
