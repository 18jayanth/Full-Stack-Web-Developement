//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
//dirname is used to get the directory name(complete path) of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
//This variable is used to check if the user is authorised or not
var userIsAuthorised = false;
//The body Parser is used to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
//since body parser middle ware is incorprated to express we dont have to import it seperately
// app.use(express.urlencoded({extended:true})); works
//User defined middleware to check the password
function authorization(req,res,next){
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
      userIsAuthorised = true;
    }
    next();
  }
//To use our custom middleware
app.use(authorization);
//When the user hits the root url
app.get("/", (req, res) => {
    console.log(__dirname);
     res.sendFile(__dirname + "/public/index.html");
   });
//When the user submits the form
app.post("/check", (req, res) => {
    //If the user is authorised then send the secret.html file
     if(userIsAuthorised){
         res.sendFile(__dirname + "/public/secret.html");
     }
     //If the user is not authorised then send the index.html file
     else{
            res.sendFile(__dirname + "/public/index.html");
         //or simply we can use res.redirect("\") the path where it should be redirected to
     }
        
   });
   //Listening on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
   
