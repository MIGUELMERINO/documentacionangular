import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/components/container/container.component';
import { ClaseUnoComponent } from './components/components/clase-uno/clase-uno.component';
import { Clase2Component } from './components/components/clase2/clase2.component';
import { DescripcionComponentComponent } from './components/components/descripcion-component/descripcion-component.component';
import { MenudocumentComponent } from './components/components/descripcion-component/menudocument/menudocument.component';
import { ProyectoComponent } from './components/components/descripcion-component/menudocument/components/proyecto/proyecto.component';
import { CreaproyectoComponent } from './components/components/descripcion-component/menudocument/components/creaproyecto/creaproyecto.component';
import { ComponenteServiciosComponent } from './components/components/descripcion-component/menudocument/components/componente-servicios/componente-servicios.component';
import { ListActividadesComponent } from './components/components/list-actividades/list-actividades.component';
import { PipesComponent } from './components/components/descripcion-component/menudocument/components/pipes/pipes.component';
import { TableCchComponent } from './components/alumnoscomponents/components/container-alumnos/table-cch/table-cch.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'clase1',
        component: ClaseUnoComponent,
      },
      {
        path: 'clase2',
        component: Clase2Component,
      },
      {
        path: 'documentacion',
        component: DescripcionComponentComponent,
        children: [
          {
            path: '',
            component: MenudocumentComponent,
            children: [
              {
                path: 'proyecto',
                component: ProyectoComponent,
              },
              {
                path: 'creaproyecto',
                component: CreaproyectoComponent,
              },
              {
                path: 'componenteservice',
                component: ComponenteServiciosComponent,
              },
              {
                path: 'pipes',
                component: PipesComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'actividad',
        component: ListActividadesComponent,
      },
      {
        path: 'evidencias',
        component: TableCchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
