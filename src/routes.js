const express = require("express");

const ListWords = require("./controller/ListWords");
const routes = express.Router();

routes.get("/word_list", ListWords.index);

module.exports = routes;