import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})

export class NewGameComponent implements OnInit{
  myId = 4;

  newGame = {
    id: this.myId,
    title: "",
    gender: "",
    description: "" 
  }

  constructor(private listServe: GameService) {}

  ngOnInit(): void {
  }

  addGame() {
    console.log("Juego Guardado: ", this.newGame);
    this.listServe.addGame(this.newGame)

    this.myId ++;
    this.newGame = {
      id: 0,
      title: "",
      gender: "",
      description: "" 
    }
  }
}
