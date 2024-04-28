const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

const portfolio_route = require("./Routes/Portfolio_Routes");

app.use(cors());
app.use(express.json());

app.use(portfolio_route);

app.listen(port, () => {
    console.log(`Listening to port no ${port}`);
});