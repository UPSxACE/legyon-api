import { MikroORM } from "@mikro-orm/core";
import "dotenv/config";
import express from "express";
import config from "./mikro-orm.config.js";

const PORT = process.env.PORT;
if (!PORT) throw new Error("PORT env missing");

const app = express();
const orm = await MikroORM.init(config);

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
