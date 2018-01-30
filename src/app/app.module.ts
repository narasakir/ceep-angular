import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FormNovoCartaoComponent } from './components/form-novo-cartao/form-novo-cartao.component';
import { MuralComponent } from './components/mural/mural.component';
import { CartaoComponent } from './components/cartao/cartao.component';



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
