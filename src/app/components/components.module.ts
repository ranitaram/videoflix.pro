import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PersonajesSectionComponent } from './personajes-section/personajes-section.component';
import { RouterModule } from '@angular/router';
import { GuionSectionComponent } from './guion-section/guion-section.component';
import { AudioSectionComponent } from './audio-section/audio-section.component';
import { ProductosSectionComponent } from './productos-section/productos-section.component';
import { FinalSectionComponent } from './final-section/final-section.component';
import { ElegirPersonajeComponent } from './elegir-personaje/elegir-personaje.component';
import { MensajeSectionComponent } from './mensaje-section/mensaje-section.component';
import { ContadorPalabrasComponent } from './contador-palabras/contador-palabras.component';
import { FormsModule } from '@angular/forms';
import { PasoFinalComponent } from './paso-final/paso-final.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PersonajesSectionComponent,
    GuionSectionComponent,
    AudioSectionComponent,
    ProductosSectionComponent,
    FinalSectionComponent,
    ElegirPersonajeComponent,
    MensajeSectionComponent,
    ContadorPalabrasComponent,
    PasoFinalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PersonajesSectionComponent,
    GuionSectionComponent,
    AudioSectionComponent,
    ProductosSectionComponent,
    FinalSectionComponent,
    ElegirPersonajeComponent,
    MensajeSectionComponent,
    ContadorPalabrasComponent,
    PasoFinalComponent
  ]
})
export class ComponentsModule { }
