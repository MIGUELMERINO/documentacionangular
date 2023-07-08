import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './components/components/container/container.component';
import { LoginComponent } from './components/components/login/login.component';
import { MenuComponent } from './components/components/menu/menu.component';
import { ClaseUnoComponent } from './components/components/clase-uno/clase-uno.component';
import { MatCardModule } from '@angular/material/card';
import { Clase2Component } from './components/components/clase2/clase2.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DescripcionComponentComponent } from './components/components/descripcion-component/descripcion-component.component';
import { MenudocumentComponent } from './components/components/descripcion-component/menudocument/menudocument.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProyectoComponent } from './components/components/descripcion-component/menudocument/components/proyecto/proyecto.component';
import { CreaproyectoComponent } from './components/components/descripcion-component/menudocument/components/creaproyecto/creaproyecto.component';
import { ComponenteServiciosComponent } from './components/components/descripcion-component/menudocument/components/componente-servicios/componente-servicios.component';
import { ListActividadesComponent } from './components/components/list-actividades/list-actividades.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ActividadalumnosComponent } from './components/alumnoscomponents/components/actividadalumnos/actividadalumnos.component';
import { ContainerAlumnosComponent } from './components/alumnoscomponents/components/container-alumnos/container-alumnos.component';
import { PipesComponent } from './components/components/descripcion-component/menudocument/components/pipes/pipes.component';
import { FiltroPaginacionPipe } from 'src/app/pipe/filtro-paginacion.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LoginComponent,
    MenuComponent,
    ClaseUnoComponent,
    Clase2Component,
    DescripcionComponentComponent,
    MenudocumentComponent,
    ProyectoComponent,
    CreaproyectoComponent,
    ComponenteServiciosComponent,
    ListActividadesComponent,
    ActividadalumnosComponent,
    ContainerAlumnosComponent,
    FiltroPaginacionPipe,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    PdfViewerModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FiltroPaginacionPipe]
})
export class AppModule {}
