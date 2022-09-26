require("dotenv").config();
const express = require('express')
const dbConnectNosql = require("./config/mongo");
const { dbConnectMysql } = require("./config/mysql");
const cors = require("cors");
const morganBody = require("morgan-body")
const loggerStream = require("./utils/handleLogger")
const app = express();
const ENGINE_DB = process.env.ENGINE_DB


app.use(cors());
app.use(express.json())
app.use(express.static("storage"))


morganBody(app, {
    noColors: true,
    stream: loggerStream,
    skip: function (req, res) {
        return res.statusCode < 400 // Todo 2xx, 3xx
    }
})
const port = process.env.PORT || 3000;

app.use("/api", require("./routes"))


app.listen(port, () =>
    console.log(`http://localhost:${port}`)
);

(ENGINE_DB === 'nosql') ? dbConnectNosql() : dbConnectMysql()

