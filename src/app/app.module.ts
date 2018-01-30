import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormNovoCartaoComponent } from './form-novo-cartao/form-novo-cartao.component';
import { MuralComponent } from './mural/mural.component';
import { CartaoComponent } from './cartao/cartao.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FormNovoCartaoComponent,
    MuralComponent,
    CartaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
