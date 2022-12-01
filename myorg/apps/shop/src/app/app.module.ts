import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiModule } from '@myorg/common-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonUiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
