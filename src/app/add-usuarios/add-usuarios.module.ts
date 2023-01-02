import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUsuariosPageRoutingModule } from './add-usuarios-routing.module';

import { AddUsuariosPage } from './add-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUsuariosPageRoutingModule,
    IonicInputMaskModule
  ],
  declarations: [AddUsuariosPage]
})
export class AddUsuariosPageModule {}
