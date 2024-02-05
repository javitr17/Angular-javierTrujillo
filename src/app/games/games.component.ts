import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>
    Juegos
    </p>
    <ul>
      @for (game of games; track game.id){
        <li (click)="juegoFavorito(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() nombreUsuario: string = '';
  @Output() comunicadorEventDeHijoAPadre=new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Uncharted 4'

    },
    {
      id: 2,
      name: 'Fortnite'

    },
    {
      id: 3,
      name: 'Gta V'

    }
  ]
juegoFavorito(j:string):void{
  alert(`A ${this.nombreUsuario} le gusta jugar a ${j}`);
  this.comunicadorEventDeHijoAPadre.emit(j);
}

}
