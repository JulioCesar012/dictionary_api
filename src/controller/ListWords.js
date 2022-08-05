const WordList = require("../data/word_list.json");

module.exports = {
    index(req, res) {
        const wordList = WordList;

        return wordList;
    }
}