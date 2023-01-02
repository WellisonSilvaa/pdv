import { Api } from './../services/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicInputMaskModule
  ],
  providers: [
    Api,
    {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
