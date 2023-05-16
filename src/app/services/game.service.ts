import { Injectable } from '@angular/core';
import { Game } from '../models/Games';

const GameList = [
  {
    "id": 1,
    "title" : "League Of Legends",
    "gender": "Moba",
    "description": "Bienvenido Invocador"
  },
  {
    "id": 2,
    "title" : "Overwatch",
    "gender": "Shooter",
    "description": "Tracer, Mercy, Widowmaker"
  },
  {
    "id": 3,
    "title" : "Dark Daguse",
    "gender": "Estrategia",
    "description": "No se que poner"
  },

]

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  //Consultar Todos los Videojuegos
  getGames(){
    return GameList;
  }

  //Consultar un solo videojuego
  getOneGame(_id: number){
    return GameList.find(game => game.id === _id)
  }

  //Agregar Videojuego
  addGame(game: Game){
    GameList.push(game);
  }

  //Editar Videojuego
  editGame(newGameEdit: Game){
    const index = GameList.findIndex(game => game.id === newGameEdit.id) 
    GameList[index] = newGameEdit;
  }

  //Eliminar Videojuego
  deleteGame(_id: number){
    GameList.splice(_id, 1);
  }

}
