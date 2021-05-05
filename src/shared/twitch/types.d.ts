export interface TwitchUser {
  _id: number;
  display_name: string;
  logo: string;
  name: string;
}

export interface TwitchTokens {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string[];
  token_type: string;
}