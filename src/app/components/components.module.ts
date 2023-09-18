import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PersonajesSectionComponent } from './personajes-section/personajes-section.component';
import { RouterModule } from '@angular/router';
import { GuionSectionComponent } from './guion-section/guion-section.component';
import { AudioSectionComponent } from './audio-section/audio-section.component';
import { ProductosSectionComponent } from './productos-section/productos-section.component';
import { FinalSectionComponent } from './final-section/final-section.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PersonajesSectionComponent,
    GuionSectionComponent,
    AudioSectionComponent,
    ProductosSectionComponent,
    FinalSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PersonajesSectionComponent,
    GuionSectionComponent,
    AudioSectionComponent,
    ProductosSectionComponent,
    FinalSectionComponent
  ]
})
export class ComponentsModule { }
