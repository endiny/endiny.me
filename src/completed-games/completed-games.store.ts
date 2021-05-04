import { makeAutoObservable } from "mobx";

const BASE_URL = 'https://us-central1-endiny-me.cloudfunctions.net';

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
      await (await fetch(`${BASE_URL}/getGamesList`)).json()
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
