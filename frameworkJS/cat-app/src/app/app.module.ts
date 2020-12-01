import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainDivComponent } from './main-div/main-div.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { CardCatComponent } from './card-cat/card-cat.component';
import { FormDivComponent } from './form-div/form-div.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainDivComponent,
    AddButtonComponent,
    CardCatComponent,
    FormDivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
