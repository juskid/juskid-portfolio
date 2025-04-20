const { Router } = require("express");
const controller = require("../controllers/projectsController");
const router = Router();

router.get("/", controller.getProjects);

router.get("/:id", controller.getProjectDetails);

module.exports = router;