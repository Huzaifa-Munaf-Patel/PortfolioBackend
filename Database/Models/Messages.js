const mongoose = require("mongoose");
const database = require("../database");

const Schema = mongoose.Schema({
    chat_id:String,
    user:{
        type:String,
        default:"developer"
    },
    message:String
});

const message = mongoose.model("portfolio_message", Schema);

module.exports = message;