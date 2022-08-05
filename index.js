const express = require("express");
const WordList = require("./word_list.json");

const app = express();

const port = process.env.PORT || 4000;

app.get("/word_list", function(req, res) {
    res.json(WordList)
});

app.listen(port, () =>
  console.log(`server is listening at http://localhost:${port}`)
);
