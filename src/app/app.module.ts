import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingFormComponent } from './components/shopping-form/shopping-form.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { ShoppingDetailComponent } from './components/shopping-detail/shopping-detail.component';
import { SalesComponent } from './components/sales/sales.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingFormComponent,
    ShoppingItemComponent,
    AboutComponent,
    ShoppingDetailComponent,
    SalesComponent,
    KontaktComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
