import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopItemInfoComponent } from './shop-item-info/shop-item-info.component';
import { ShopItemFormComponent } from './shop/shop-item-form/shop-item-form.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "shop", component: ShopComponent},
  {path: "shop/:id", component: ShopItemInfoComponent},
  {path: "form", component: ShopItemFormComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
