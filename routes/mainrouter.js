const express = require("express");
const app = require("../index.js").app;
const router = express.Router();
const moment = require("moment");
const fs = require("fs");

app.use("/", router);

var studies = [];
var programmingSkills = [];
var showcaseItems = [];
fs.readFile(process.cwd() + "/config/studies.json", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }

    studies = JSON.parse(data);
});
fs.readFile(process.cwd() + "/config/programmingskills.json", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }

    programmingSkills = JSON.parse(data);
});
fs.readFile(process.cwd() + "/config/showcase.json", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }

    showcaseItems = JSON.parse(data);
});

router.get("/", (req, res) => {
    res.render("index", {
        studies: studies,
        programmingSkills: programmingSkills,
        showcaseItems: showcaseItems,
        moment: moment
    });
});