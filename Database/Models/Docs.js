const mongoose = require("mongoose");
const database = require("../database");

const Schema = mongoose.Schema({
    name:String,
    title:String,
    para:String
})

const docs = mongoose.model("Doc", Schema);

module.exports = docs;