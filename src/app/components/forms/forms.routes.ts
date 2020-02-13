import {RouterModule, Routes} from '@angular/router';
import {FormsComponent} from './forms.component';
import {DemoComponent} from './demo/demo.component';

const formsRoutes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {path: 'demo', component: DemoComponent},
    ]
  },
  {path: '', redirectTo: '/demo', pathMatch: 'full'}
];

export const FORMS_ROUTES = RouterModule.forChild(formsRoutes);
