const express = require("express");
const app = require("../index.js").app;
const router = express.Router();
const moment = require("moment");

app.use("/", router);

router.get("/", (req, res) => {
    res.render("index", {
        moment: moment
    });
});