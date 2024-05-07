const mongoose = require("mongoose");
const database = require("../database");

const Schema = mongoose.Schema({
    name:String
})

const Chat = mongoose.model("Portfolio_Chat", Schema);

module.exports = Chat;