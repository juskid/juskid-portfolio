const { Router } = require("express");
const controller = require("../controllers/aboutController");
const router = Router();

router.get("/", controller.getAbout);

module.exports = router;