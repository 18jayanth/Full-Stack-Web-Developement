/* In this, we are creating our own middleware logger what logger will do? it will return us the method,path and url of the client request,
the program will return "Hello" to the client */
import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){
console.log("Request method",req.method);
console.log("Request path",req.path);
console.log("Request URL",req.url);
next();
}
app.use(logger)
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
/*
output:
Request method GET
Request path /
Request URL /
/
