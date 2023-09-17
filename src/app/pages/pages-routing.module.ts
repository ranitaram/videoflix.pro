import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { GuionComponent } from './guion/guion.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'personajes', component: PersonajesComponent},
  {path: 'guion', component: GuionComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
