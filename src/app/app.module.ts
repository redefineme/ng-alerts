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
// import { AlertsComponents} from "./components/components.module";

import { NgAlertsService } from "./components/ngAlerts/services/ngAlertsService"

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
    // AlertsComponents,
    SIDEBAR_TOGGLE_DIRECTIVES
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
    NgAlertsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
