const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

const portfolio_route = require("./Routes/Portfolio_Routes");

app.use(cors());
app.use(express.json());

app.use(portfolio_route);

const server = app.listen(port, () => {
    console.log(`Listening to port no ${port}`);
});

const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    socket.on("messageSent", data => {
        socket.broadcast.emit("getMessage", data);
    })
})