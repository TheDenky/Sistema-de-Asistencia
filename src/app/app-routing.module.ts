import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PersonalComponent } from './components/personal/personal.component';
import { InstitucionComponent } from './components/institucion/institucion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { TramiteComponent } from './components/tramite/tramite.component';
import { LicenciaComponent } from './components/tramite/tramites/licencia/licencia.component';
import { PermisoComponent } from './components/tramite/tramites/permiso/permiso.component';
import { JustificacionComponent } from './components/tramite/tramites/justificacion/justificacion.component';
import { VacacionesComponent } from './components/tramite/tramites/vacaciones/vacaciones.component';

import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  {path: "login", component: LoginComponent, pathMatch: 'full'},
  {path: "signup", component: SignupComponent},
  {path: "personal", component: PersonalComponent},
  {path: "institucion", component: InstitucionComponent},
  {path: "registro", component: RegistroComponent},
  {path: "tramite", component: TramiteComponent},
  {path: "tramite/licencia", component: LicenciaComponent},
  {path: "tramite/permiso", component: PermisoComponent},
  {path: "tramite/justificacion", component: JustificacionComponent},
  {path: "tramite/vacaciones", component: VacacionesComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
