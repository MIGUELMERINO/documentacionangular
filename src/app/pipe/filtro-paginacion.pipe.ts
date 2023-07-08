import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPaginacion',
})
export class FiltroPaginacionPipe implements PipeTransform {
  transform(categoria: any[], busqueda: string = ''): any[] {

    // todo: vamos a filtrar el array de objetos de tipo clase Categoria mediante su nombre.
    const filtro = categoria.filter((item) => item.nombre.includes(busqueda));
    return filtro;
  }
}
