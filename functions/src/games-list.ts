import {https, logger} from "firebase-functions";
import * as admin from "firebase-admin";

interface Game {
  id: string;
  name: string;
  platform: string;
  score: number;
}

const GAMES_LIST_REF = "/1a8pzsOq0j1VNEjq_MaQKUJy2-tN1Mi4XiIjn6iczYHI/Лист1";

export const getGamesList = https.onRequest(async (req, res) => {
  const data = await admin.database().ref(GAMES_LIST_REF).once("value");
  const games = Object.values(data.toJSON() as { [key: string]: Game[] });
  logger.info(games, {structuredData: true});
  res.set({"Access-Control-Allow-Origin": "*"}).send(games);
});
