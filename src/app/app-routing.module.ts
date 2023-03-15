import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './components/from-event/from-event.component';
import { PrimerObservableComponent } from './components/primer-observable/primer-observable.component';
import { RangeComponent } from './components/range/range.component';

const routes: Routes = [
  {
    path: '',
    component: PrimerObservableComponent,
  },
  {
    path: 'from-event',
    component: FromEventComponent,
  },
  {
    path: 'range',
    component: RangeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
