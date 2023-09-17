import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PersonajesSectionComponent } from './personajes-section/personajes-section.component';
import { RouterModule } from '@angular/router';
import { GuionSectionComponent } from './guion-section/guion-section.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PersonajesSectionComponent,
    GuionSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PersonajesSectionComponent,
    GuionSectionComponent
  ]
})
export class ComponentsModule { }
