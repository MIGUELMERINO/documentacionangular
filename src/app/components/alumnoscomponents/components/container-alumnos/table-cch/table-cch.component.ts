import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import categoriaJson from '../../../../../../assets/json/categorias.json';
import { Categoria } from 'src/app/components/models/categorias';
import { FiltroPaginacionPipe } from 'src/app/pipe/filtro-paginacion.pipe';

const ELEMENT_DATA: Categoria[] = categoriaJson;

@Component({
    selector: 'app-table-cch',
    templateUrl: './table-cch.component.html',
    styleUrls: ['./table-cch.component.css'],
    standalone: true,
    imports: [MatTableModule ]
})
export class TableCchComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['idcategoria', 'nombre', 'descripcion'];
  dataSource = ELEMENT_DATA;
  buscar: string = '';
  ngOnDestroy(): void {}

  ngOnInit(): void {}

  busqueda(nombre: string): void {
    console.log(nombre)
    this.buscar = nombre;
  }
}
