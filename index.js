const express = require("express");
const { wordList } = require("./word_list.json");

const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if(request.method === 'OPTIONS') {
    response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return response.status(200).send({});
  }
  next();
});

const port = process.env.PORT || 4000;

app.get("/word_list", function(req, res) {
    res.json(wordList)
});

app.listen(port, () =>
  console.log(`server is listening at http://localhost:${port}`)
);
