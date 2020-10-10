import express from "express";

const app = express();

const port = 3000;
let a = 0;

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

app.get("/", (req, res) => {
    a++;
    res.status(200).send(a.toString());
})

app.listen(port);