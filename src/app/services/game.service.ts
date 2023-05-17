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
    "title" : "Dark Dungeons",
    "gender": "Estrategia",
    "description": "No se que poner"
  },
]

@Injectable({
  providedIn: 'root'
})

export class GameService {
  juego: Game[] = []
  ClaveLocalStorage = "videogames_angular"

  constructor() { }

  getGames() {
    if (localStorage.getItem(this.ClaveLocalStorage) === null) {
      this.juego = [];
    } else {
      this.juego = JSON.parse(localStorage.getItem(this.ClaveLocalStorage) || "[]");
    }
    return this.juego;
  }

  addGame(game: Game) {
    this.juego.push(game);
    let juegos: Game[] = [];
    if (localStorage.getItem(this.ClaveLocalStorage) === null) {
      juegos = [];
      localStorage.setItem(this.ClaveLocalStorage, JSON.stringify(juegos));
    } else {
      juegos = JSON.parse(localStorage.getItem(this.ClaveLocalStorage)!);
      game.id = juegos.length;
      juegos.push(game);
      localStorage.setItem(this.ClaveLocalStorage, JSON.stringify(juegos));
    }
    window.location.reload();
  }

  deleteGame(game: Game){
    for (let i = 0; i < this.juego.length; i++) {
      if (game == this.juego[i]) {
        this.juego.splice(i, 1);
        localStorage.setItem(this.ClaveLocalStorage, JSON.stringify(this.juego));
      }
    }
    window.location.reload();
  }

  //Consultar un solo videojuego
  getOneGame(_id: number){
    return this.juego.find(game => game.id === _id)
  }

  //Editar Videojuego
  editGame(newGameEdit: Game){
    let videojuegos = JSON.parse(localStorage.getItem(this.ClaveLocalStorage)!)
    for(let i=0;i<videojuegos.length;i++){
      if(videojuegos[i].id===newGameEdit.id){
        videojuegos[i]=newGameEdit;
      }
    }
    localStorage.setItem(this.ClaveLocalStorage,JSON.stringify(videojuegos));
    window.location.reload();
  }
}
