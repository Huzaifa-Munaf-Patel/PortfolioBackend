const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://Huzaifa:Huzaifa@mydatabase.vad6c3b.mongodb.net/", {
useUnifiedTopology: true,
useNewUrlParser: true
}).then(() => console.log("Connected to the Database"))
.catch((e) => console.log("Unexpected Error Occured"));

module.exports = connect;

