/**
 * Created by iZel on 4/27/17.
 */
import {Injectable ,EventEmitter} from "@angular/core";
import { AlertModel} from "./alert.model";
@Injectable()

export class NgAlertsService{

  eventAlerts = new EventEmitter();

  defaultOptions: any={};

  constructor(options?:AlertModel){
    Object.assign(this.defaultOptions,options)
  }

  pushAlert(alert){
    this.eventAlerts.emit({
      type:alert.type || 'success',
      msg:alert.msg || 'Error',
      timeout:alert.timeout || this.defaultOptions.timeout,
      place:alert.place || this.defaultOptions.place,
      size:alert.size || this.defaultOptions.size,
      dismissible:true
    })
  }
}
