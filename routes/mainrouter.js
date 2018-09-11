const express = require("express");
const app = require("../index.js").app;
const router = express.Router();
const moment = require("moment");
const fs = require("fs");

app.use("/", router);

var hobbies = [];

router.get("/", (req, res) => {
    res.render("index", {
        moment: moment
    });
});