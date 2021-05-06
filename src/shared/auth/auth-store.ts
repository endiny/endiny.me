import {makeAutoObservable} from 'mobx';
import {TwitchTokens, TwitchUser} from '../twitch/types';

interface AuthCredentials {
  clientId: string;
  redirect_uri: string;
}

interface AuthResponse {
  tokens: TwitchTokens;
  user: TwitchUser;
}

export class AuthStore {
  private _token: TwitchTokens | null = null;
  private _user: TwitchUser | null = null;
  private _isLoading: boolean = false;

  private readonly authCredentials: AuthCredentials = {
    clientId: 'r7k7wawcxo5oey9mahxmy007jl916z',
    redirect_uri: 'http://localhost:3000/auth',
  };

  constructor() {
    makeAutoObservable(this);

    const credsJson = localStorage.getItem('creds');
    if (credsJson != null) {
      try {
        const {user, tokens} = JSON.parse(credsJson);
        this.setTokens(tokens);
        this.setUser(user);
      } catch {}
    }
  }

  get token(): TwitchTokens | null {
    return this._token;
  }

  get user(): TwitchUser | null {
    return this._user;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  setTokens(token: TwitchTokens | null) {
    this._token = token;
  }

  setUser(user: TwitchUser | null) {
    this._user = user;
  }

  setIsLoading(isLoading: boolean) {
    this._isLoading = isLoading;
  }

  async authenticate() {
    this.setIsLoading(true);
    const {clientId, redirect_uri} = this.authCredentials;
    const codeUri =
      `https://id.twitch.tv/oauth2/authorize?` +
      `client_id=${clientId}&` +
      `redirect_uri=${redirect_uri}&` +
      `response_type=code&` +
      `scope=openid user_read`;

    const code = await this.getCode(codeUri);
    // TODO: extract url to a single place.
    const {tokens, user}: AuthResponse = await (
      await fetch(
        `https://us-central1-endiny-me.cloudfunctions.net/twitchAuth?code=${code}`
      )
    ).json();
    this.setTokens(tokens);
    this.setUser(user);
    this.setIsLoading(false);

    localStorage.setItem('creds', JSON.stringify({user, tokens}));
  }

  private getCode(uri: string) {
    return new Promise((resolve, reject) => {
      const authWindow = window.open(
        uri,
        '_blank',
        'toolbars=yes,scrollbars=yes,width=500,height=500'
      );

      if (!authWindow) {
        return reject('No window was opened');
      }

      let url: string | undefined;
      const timer = setInterval(async () => {
        try {
          url = authWindow.location?.search;
        } catch {}
        if (url) {
          const params = new URLSearchParams(url);
          const code = params.get('code');
          console.log(code);
          authWindow.close();
          clearInterval(timer);
          code ? resolve(code) : reject(`Couldn't get a code ¯\_(ツ)_/¯`);
        }
      }, 500);
    });
  }

  async logout() {
    this.setIsLoading(true);
    this.setTokens(null);
    this.setUser(null);
    localStorage.removeItem('creds');

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 1000);
    });

    this.setIsLoading(false);
  }
}
