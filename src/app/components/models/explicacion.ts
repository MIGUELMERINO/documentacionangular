import { Explicaciones } from './explicaciones';

export class Explicacion {
  explicacion: Explicaciones;

  constructor(private explicaciones: Explicaciones) {
    this.explicacion = this.explicaciones;
  }
}
