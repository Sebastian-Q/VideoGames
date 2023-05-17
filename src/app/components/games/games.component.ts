import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent  implements OnInit{
  myGame: any;
  gameInfo: any;

  constructor(private listServe : GameService){}

  ngOnInit(): void {
  }

  getPosition($event: any){
    this.myGame = this.listServe.getOneGame($event)
    this.gameInfo = this.myGame;
  }

  editGame(){
    this.listServe.editGame(this.gameInfo)
  }
}
