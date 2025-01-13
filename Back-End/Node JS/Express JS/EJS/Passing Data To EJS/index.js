import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
//rendering index.ejs file to show the form
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//submitting the form and 
// calculating the number of letters in the name
app.post("/submit", (req, res) => {

  const no_of_letters=req.body["fName"].length 
  + req.body["lName"].length;
  
res.render("index.ejs", {numberOfLetters: no_of_letters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
