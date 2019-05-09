import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlDatatableModule } from 'sl-datatable';
import { SlDatatableDemoComponent } from './demo/sl-datatable-demo/sl-datatable-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SlDatatableDemoComponent
  ],
  imports: [
    BrowserModule,
    SlDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
