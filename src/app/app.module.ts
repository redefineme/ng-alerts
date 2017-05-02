import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

import { ComponentsModule} from "./components/components.module";

import { NgAlertsService } from "./components/ngAlerts/services/ngAlertsService"


export function AlertConfig(){
  return new NgAlertsService(
    {
      timeout: 3000,
      place:'right-top-alert',
      size:'default'
    }
  )
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    SIDEBAR_TOGGLE_DIRECTIVES
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  [
    {
      provide: NgAlertsService,
      useFactory: AlertConfig
    }
  ]
    // NgAlertsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
