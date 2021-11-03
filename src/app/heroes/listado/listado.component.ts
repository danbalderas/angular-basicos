import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['spiderman', 'batman', 'superman', 'tu puta madre', 'tu chingada cola'];
  heroeborrado: string = '';
  borrarHeroe() {
    this.heroeborrado = this.heroes.pop() || '';
  }

}
