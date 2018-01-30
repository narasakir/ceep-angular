import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MuralComponent } from './components/mural/mural.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FormNovoCartaoComponent } from './components/form-novo-cartao/form-novo-cartao.component';
import { CartaoComponent } from './components/cartao/cartao.component';
=======
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FormNovoCartaoComponent } from './components/form-novo-cartao/form-novo-cartao.component';
import { MuralComponent } from './components/mural/mural.component';
import { CartaoComponent } from './components/cartao/cartao.component';

>>>>>>> 156f8c321c3a310b3db0f6973ac417a5a9725293


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MuralComponent,
    CabecalhoComponent,
    FormNovoCartaoComponent,
    CartaoComponent
=======
    CabecalhoComponent,
    FormNovoCartaoComponent,
    MuralComponent,
    CartaoComponent

>>>>>>> 156f8c321c3a310b3db0f6973ac417a5a9725293
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
