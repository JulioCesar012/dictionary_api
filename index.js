const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('word_list.json')
const middlewares = jsonServer.defaults()

const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

server.use(middlewares)
server.use(router)

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

server.listen(process.env.PORT || 4000, () => {
  console.log('JSON Server is running')
})
