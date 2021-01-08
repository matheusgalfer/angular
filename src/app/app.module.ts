import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponet } from './meu-primeiro/meu-primeiro.componet';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component'

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponet,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
