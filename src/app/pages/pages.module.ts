import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ], 
  exports: [
    InicioComponent
  ]
})
export class PagesModule { }
