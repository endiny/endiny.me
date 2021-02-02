import { makeAutoObservable } from "mobx";

import gamesMock from "./games-mock.json";

export interface CompletedGame {
  id: string;
  name: string;
  score: number;
}

export class CompletedGamesStore {
  private _gamesList: CompletedGame[] = [];
  private _isFetching = false;

  constructor() {
    makeAutoObservable(this);
  }

  get gamesList() {
    return this._gamesList;
  }

  get isFetching() {
    return this._isFetching;
  }

  async loadGamesList() {
    this.setIsFetching(true);
    this.setGamesList(
      await new Promise((resolve) => setTimeout(() => resolve(gamesMock), 1000))
    );
    this.setIsFetching(false);
  }

  setGamesList(games: CompletedGame[]) {
    this._gamesList = games;
	}
	
	setIsFetching(isFetching: boolean) {
		this._isFetching = isFetching;
	}
}
