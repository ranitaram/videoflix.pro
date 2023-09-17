import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';
import { PersonajesComponent } from './personajes/personajes.component';


@NgModule({
  declarations: [
    InicioComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ], 
  exports: [
    InicioComponent,
    PersonajesComponent
  ]
})
export class PagesModule { }
