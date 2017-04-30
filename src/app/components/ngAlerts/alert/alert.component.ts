/**
 * Created by iZel on 4/27/17.
 */
import { Component, Input,EventEmitter,Output,OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector:'[single-alert]',
  templateUrl:'./alert.component.html',
  encapsulation:ViewEncapsulation.None
})

export class AlertComponent implements OnInit{

  @Input() alert:any={}
  @Output() onClosed=new EventEmitter();
  dissmiss=true;
  constructor(){}

  ngOnInit(){

    console.log(this.alert)
    setTimeout(()=>{
      this.dissmiss=false;
      this.onClosed.emit();
    },this.alert.timeout||3000)
  }
}
