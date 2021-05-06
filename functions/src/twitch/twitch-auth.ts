import {config, https, logger} from "firebase-functions";
import fetch from "node-fetch";

export const twitchAuth = https.onRequest(async (req, res) => {
  const {code} = req.query;
  const {secret, client} = config().twitch;
  const tokenResponse = await fetch(
      "https://id.twitch.tv/oauth2/token?" +
      `client_id=${client}&` +
      `client_secret=${secret}&` +
      `code=${code}&` +
      "grant_type=authorization_code&" +
      "redirect_uri=http://localhost:3000/auth",
      {method: "POST"}
  );
  if (!tokenResponse.ok) {
    logger.error(`Auth error: ${await tokenResponse.text()}`);
    res.status(401).send("Couldnt auth");
    return;
  }
  const tokens = await tokenResponse.json();
  const userResponse = await fetch("https://api.twitch.tv/helix/users", {
    headers: {
      "Client-ID": client,
      "Authorization": `Bearer ${tokens.access_token}`,
    },
  });
  if (!userResponse.ok) {
    logger.error(`Fetch user error: ${await userResponse.text()}`);
    res.status(401).send("Couldnt auth");
    return;
  }
  const user = (await userResponse.json()).data[0];
  logger.info(user);
  res.set({"Access-Control-Allow-Origin": "*"}).send({tokens, user});
});
