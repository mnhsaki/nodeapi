const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

const apiData = require("./data.jason");

app.get('/', (req, res) => {
    res.send("Hello I am live")
});

app.listen(port, () => {
    console.log("I am live  2");
});