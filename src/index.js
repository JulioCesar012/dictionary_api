require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");
const app = express();

app.use(express.json);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: "*"
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

app.use(routes);

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333...')
});