import "dotenv/config";
import express from "express";

const PORT = process.env.PORT;
if (!PORT) throw new Error("PORT env missing");

const app = express();

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
