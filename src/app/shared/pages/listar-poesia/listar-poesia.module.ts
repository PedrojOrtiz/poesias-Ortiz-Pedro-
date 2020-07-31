import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPoesiaPageRoutingModule } from './listar-poesia-routing.module';

import { ListarPoesiaPage } from './listar-poesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPoesiaPageRoutingModule
  ],
  declarations: [ListarPoesiaPage]
})
export class ListarPoesiaPageModule {}
