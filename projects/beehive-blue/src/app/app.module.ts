import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibBeehiveUISharedModule } from 'projects/lib-beehive-ui-shared/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LibBeehiveUISharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
