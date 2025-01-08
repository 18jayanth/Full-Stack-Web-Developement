/* In this we have to take the request and combine the 
city and pet and give it to user */

import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
var bandname=" ";
function band (req,res,next){
  console.log(req.body);
  bandname=req.body["street"]+req.body["pet"];
  next();
}
app.use(band);

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Data is sent ${bandname} ✌️</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port} `);
});


