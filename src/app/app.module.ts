import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { InstitucionComponent } from './components/institucion/institucion.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalComponent } from './components/personal/personal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TramiteComponent } from './components/tramite/tramite.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PermisoComponent } from './components/tramite/tramites/permiso/permiso.component';
import { LicenciaComponent } from './components/tramite/tramites/licencia/licencia.component';
import { VacacionesComponent } from './components/tramite/tramites/vacaciones/vacaciones.component';
import { JustificacionComponent } from './components/tramite/tramites/justificacion/justificacion.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    InstitucionComponent,
    LoginComponent,
    PersonalComponent,
    RegistroComponent,
    HomeComponent,
    TramiteComponent,
    PermisoComponent,
    LicenciaComponent,
    VacacionesComponent,
    JustificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
