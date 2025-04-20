const db = require("../db/db");

async function getAbout(req, res) {
    res.render("about");
}

module.exports = {
    getAbout,
};