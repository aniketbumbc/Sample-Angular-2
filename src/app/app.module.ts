import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CustomComponent } from './custom.component';
import { EventBComponent } from './event-b.component';
import { TwowayComponent } from './twoway.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CustomComponent,
    EventBComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
