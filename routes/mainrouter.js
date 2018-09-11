const express = require("express");
const app = require("../index.js").app;
const router = express.Router();
const moment = require("moment");
const fs = require("fs");

app.use("/", router);

var studies = [];
fs.readFile(process.cwd() + "/config/studies.json", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }

    studies = JSON.parse(data);
});

router.get("/", (req, res) => {
    res.render("index", {
        studies: studies,
        moment: moment
    });
});