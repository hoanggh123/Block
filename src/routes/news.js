const express = require("express");
const router = express.Router();
const newController = require("../app/controllers/NewController"); 

router.use("/:slug", newController.details);
router.use("/", newController.news);
module.exports = router;

