var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.get("/", dashboardController.get)

module.exports = router;