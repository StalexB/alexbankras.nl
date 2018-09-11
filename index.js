const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");

const httpServer = http.createServer(app);
httpServer.listen(94, "localhost", err => {
    if(err) {
        return console.error(err);
    }

    console.log("HTTP server started.");
});

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

module.exports = {
    app: app
};

require("./routes/mainrouter.js");