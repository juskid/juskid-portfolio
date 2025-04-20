const projects = require("../db/db");

//getProjectDetails
//getProjects

async function getProjects(req, res) {
    res.render("projects/projectIndex", { projects });
}

async function getProjectDetails(req, res) {
    console.log(req.params);
    const projectId = req.params.id;
    console.log(projectId);
    console.log(projects[projectId]);
    const projectDetails = projects.find((project) => project.id === Number(projectId))
    res.render("projects/projectDetails", { projectDetails: projectDetails})
}

module.exports = {
    getProjects,
    getProjectDetails,
}