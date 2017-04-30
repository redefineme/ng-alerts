/**
 * Created by iZel on 4/27/17.
 */
import { Injectable} from '@angular/core';
@Injectable()
export class AlertModel{
  type?:string ='success';
  timeout?:number= 3000;
  place?:string='right-top-alert';
  size?:string='default';
}
