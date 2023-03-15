import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerObservableComponent } from './components/primer-observable/primer-observable.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { RangeComponent } from './components/range/range.component';

@NgModule({
  declarations: [AppComponent, PrimerObservableComponent, FromEventComponent, RangeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
