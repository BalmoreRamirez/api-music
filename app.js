require("dotenv").config();
const express = require('express')
const dbConnect = require("./config/mongo");
const cors = require("cors");
const app = express();


app.use(cors());
const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`http://localhost:${port}`)
);

dbConnect()