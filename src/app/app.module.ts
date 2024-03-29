import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { artikelComponent } from './artikel/artikel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { verbenComponent } from './verben/verben.component';

@NgModule({
  declarations: [
    AppComponent,
    artikelComponent,
    verbenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
