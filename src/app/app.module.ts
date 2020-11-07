import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticulosComponent } from './shared/components/articulos/articulos.component';
import { NoticiasComponent } from './shared/components/noticias/noticias.component';
import { LoginComponent } from './shared/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    NoticiasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
