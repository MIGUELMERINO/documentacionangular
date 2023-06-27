import { Component } from '@angular/core';

import actividad from '../../../../assets/json/actividades.json';

@Component({
  selector: 'app-list-actividades',
  templateUrl: './list-actividades.component.html',
  styleUrls: ['./list-actividades.component.css'],
})
export class ListActividadesComponent {
  showPanel: boolean = false;
  actividad1: any = [];

  constructor() {
    this.actividad1 = actividad;
  }
}
