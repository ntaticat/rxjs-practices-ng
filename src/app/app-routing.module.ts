import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimerObservableComponent } from './components/primer-observable/primer-observable.component';

const routes: Routes = [
  {
    path: '',
    component: PrimerObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
