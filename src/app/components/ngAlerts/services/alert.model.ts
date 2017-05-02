/**
 * Created by iZel on 4/27/17.
 */
import { Injectable} from '@angular/core';
@Injectable()
export class AlertModel{
  timeout?:number= 3000;
  place?:string='right-top-alert';
  size?:string='default';
  limit?:number=5;

  constructor(){
    this.timeout= 3000;
    this.place='right-top-alert';
    this.size='default';
    this.limit=5;
  }
}
