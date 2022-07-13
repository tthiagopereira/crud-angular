import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import {FormsModule} from "@angular/forms";
import { TemplateListComponent } from './template-list/template-list.component';
import {registerLocaleData} from "@angular/common";
import localPt from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {KeyPipe} from "./Pipes/key.pipe";

registerLocaleData(localPt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TemplateListComponent,
    KeyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
