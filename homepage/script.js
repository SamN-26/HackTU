const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) =>{
    // console.log(__dirname + "/index.js")
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    console.log(req.body.search)
});

app.listen(300, () => {
    console.log('hello world');
});