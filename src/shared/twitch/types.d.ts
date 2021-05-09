export interface TwitchUser {
  id: number;
  display_name: string;
  profile_image_url: string;
}

export interface TwitchTokens {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string[];
  token_type: string;
}
