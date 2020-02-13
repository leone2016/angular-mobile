import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LDatapickerComponent } from './l-datapicker/l-datapicker.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoaderComponent, MessagePageComponent, ToolbarComponent, LDatapickerComponent, NoPageFoundComponent],
  exports: [
    HeaderComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
