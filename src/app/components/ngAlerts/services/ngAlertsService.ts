/**
 * Created by iZel on 4/27/17.
 */
import {Injectable ,EventEmitter} from "@angular/core";
@Injectable()

export class NgAlertsService{

  eventAlerts = new EventEmitter();

  constructor(){}

  pushAlert(alert){
    this.eventAlerts.emit({
      type:alert.type || 'success',
      msg:alert.msg || 'Error',
      timeout:alert.timeout || 3000,
      place:alert.place || 'right-bottom',
      size:alert.size || 'default',
      dismissible:true
    })
  }
}
