import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPoesiaPage } from './listar-poesia.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPoesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPoesiaPageRoutingModule {}
