/* In this we have to take the request and combine the 
city and pet and give it to user */

import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
//The body Parser is used to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
var bandname=" ";
//User defined middleware to combine both data
function band (req,res,next){
  console.log(req.body);
  bandname=req.body["street"]+req.body["pet"];
  next();
}
//To use our custom middleware
app.use(band);
//When the user hits the root url
app.get("/", (req, res) => {
 console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});

//When the user submits the form
app.post("/submit", (req, res) => {
  
  res.send(`<h1>Data is sent ${bandname} ✌️</h1>`);
});
//Listening on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port} `);
});


