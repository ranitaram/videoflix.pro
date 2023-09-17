import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { GuionComponent } from './guion/guion.component';
import { GaleriaAudioComponent } from './galeria-audio/galeria-audio.component';


@NgModule({
  declarations: [
    InicioComponent,
    PersonajesComponent,
    GuionComponent,
    GaleriaAudioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ], 
  exports: [
    InicioComponent,
    PersonajesComponent,
    GaleriaAudioComponent,
  ]
})
export class PagesModule { }
