/*In this project , body parser analyzes data and converts into JSON object, when we fill the data it will convert into json object , when it submit it will print
"data received"*/
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));


/* 
When you navigate to the root URL (e.g., http://localhost:3000), the server sends the index.html file located in the public directory to the browser.
The browser will then render the content of index.html.
*/
/*
And server.js contains the above code, the server will:

Log the directory path, e.g., /home/user....../PROJECT-1.
Send /home/user/..../PROJECT-1/index.html to the browser.
*/
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

//This will be triggered when user hits submit , body-parser parses data and display in the console at for client "data received" message will appear
/*
It defines a POST route at the /submit endpoint.
When a client sends a POST request to /submit, this route gets triggered.

console.log(req.body) logs the parsed request body data sent by the client.
For this to work, you need middleware (like express.json() or body-parser) to parse the incoming request body.

res.send("Data received") sends a plain text response back to the client, confirming that the server received the data.
*/
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
/*
app.listen(port) tells the Express application to start listening for incoming connections on the specified port.
Callback Function:

The second argument is an optional callback function that runs after the server starts successfully.
In this case, it logs a message to the console indicating the server is up and running, e.g.,:
csharp
Copy code
Listening on port 3000
*/

