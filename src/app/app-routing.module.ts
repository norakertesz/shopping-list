import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { SalesComponent } from './components/sales/sales.component';
import { ShoppingDetailComponent } from './components/shopping-detail/shopping-detail.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [ {path:"", component:ShoppingListComponent},
{path:"products/:id",component:ShoppingDetailComponent},
{path:"about",component:AboutComponent},
{path:"sales", component:SalesComponent},
{path:"kontakt", component:KontaktComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
