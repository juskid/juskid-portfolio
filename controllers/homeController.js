const projects = require("../db/db");

async function getHomeDetails(req, res) {
    res.render("index", { projects: projects });
}

module.exports = {
    getHomeDetails,
};