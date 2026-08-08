import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProductDetails } from './features/shop/product-details/product-details';
import { Shop } from './features/shop/shop';
import { NotFound } from './shared/components/not-found/not-found';
import { ServerError } from './shared/components/server-error/server-error';

export const routes: Routes = [
  {path:'',component:Home},
  {path:'shop',component:Shop},
  {path:'shop/:id',component:ProductDetails},
  {path:'not-found',component:NotFound},
  {path:'server-error',component:ServerError},
  {path:'**', redirectTo:'not-found', pathMatch:'full'},
];
