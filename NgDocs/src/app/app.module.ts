import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgOnChangesComponent } from 'src/app/component-lifecycle/ng-on-changes/ng-on-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    NgOnChangesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
