import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import explica from '../../../../assets/json/explicacion.json';

@Component({
  selector: 'app-clase2',
  templateUrl: './clase2.component.html',
  styleUrls: ['./clase2.component.css'],
})
export class Clase2Component {
  comentarios: any = [];
  comentata: FormGroup;
  json: any = explica;

  constructor(private form: FormBuilder) {
    this.comentata = this.form.group({
      comentario: [],
    });
  }

  agregaComentario() {
    this.comentarios.push(this.comentata.value);
    this.comentata.reset();
  }
}
