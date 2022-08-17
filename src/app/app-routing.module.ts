import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{HomeComponent} from './noticias/home';

const routes: Routes = [
  {   path: '',
  redirectTo: 'noticias/home',
  pathMatch: 'full' },
{   path: 'home', //nome do barra ex nomedosite/home
redirectTo: 'noticias/home'},
{   path: 'noticias/home',
component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
