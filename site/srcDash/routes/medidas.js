var express = require("express");
var router = express.Router();
const app = express();

var medidaController = require("../controllers/medidaController");

router.get("/", function(req, res) {
    medidaController.requisitarValoresCpuDatabase(req, res);
});

/* router.get("/", function(req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
}) */
  
module.exports = router;