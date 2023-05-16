import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/Games';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})

export class ListGamesComponent implements OnInit{

  @Output() sendPosition = new EventEmitter;

  myGames : Game[] | undefined

  constructor(private listServe : GameService){}

  //Consultar
  ngOnInit(): void {
    this.myGames = this.listServe.getGames()
    console.log(this.myGames)
  }

  //Consultar informacion al editar
  getPosition(_id: number){
    this.sendPosition.emit(_id)
  }
  
  //Eliminar
  deleteGame(_id: number){
    this.listServe.deleteGame(_id)
  }
}
