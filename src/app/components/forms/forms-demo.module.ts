import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { FormsComponent } from './forms.component';
import {FORMS_ROUTES} from './forms.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [DemoComponent, FormsComponent],
  imports: [
    CommonModule,
    FormsModule,
    FORMS_ROUTES,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FormsDemoModule { }
