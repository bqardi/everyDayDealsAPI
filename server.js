import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dummyDataPath = path.join(__dirname, "dummyData.json");
const dummyData = JSON.parse(fs.readFileSync(dummyDataPath, "utf-8"));

app.get("/api/deals", (req, res) => {
  res.json(dummyData);
});

app.listen(5555, () => console.log("Server running on port 5555"));
