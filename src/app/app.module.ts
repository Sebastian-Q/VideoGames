import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { GamesComponent } from './components/games/games.component';
import { ListGamesComponent } from './components/list-games/list-games.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    GamesComponent,
    ListGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
