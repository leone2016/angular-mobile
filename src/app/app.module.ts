import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocalStorageModule} from 'angular-2-local-storage';
import {SharedModule} from './shared/shared.module';
import {APP_ROUTES} from './app.routes';
import {FormsDemoModule} from './components/forms/forms-demo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LocalStorageModule.forRoot({
      prefix: 'app-mobile',
      storageType: 'localStorage'
    }),
    APP_ROUTES,
    FormsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
