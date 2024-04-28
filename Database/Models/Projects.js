const database = require("../database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name:String,
    image_url:String,
    site_url:String,
    github_url:String
});

const Portfolio_Project = mongoose.model("Portfolio_project", Schema);

module.exports = Portfolio_Project;