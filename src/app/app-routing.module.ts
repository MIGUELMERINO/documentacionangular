import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/components/container/container.component';
import { ClaseUnoComponent } from './components/components/clase-uno/clase-uno.component';
import { Clase2Component } from './components/components/clase2/clase2.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
