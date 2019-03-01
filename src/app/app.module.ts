import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CarteComponent } from './carte/carte.component';
import { ItemComponent } from './cvteck/item/item.component';
import { ListComponent } from './cvteck/list/list.component';
import { CVComponent } from './cvteck/cv/cv.component';
import { DetailComponent } from './cvteck/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CarteComponent,
    ItemComponent,
    ListComponent,
    CVComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
