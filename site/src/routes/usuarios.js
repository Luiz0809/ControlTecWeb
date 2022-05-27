var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
var turmaController = require("../controllers/turmaController");

router.get("/", function(req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function(req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function(req, res) {
    instituicaoController.cadastrar(req, res);
})

router.post("/autenticar", function(req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrarUsuario", function(req, res) {
    usuarioController.cadastrarUsuario(req, res);
})

router.post("/cadastrarTurma/:fkInstituicao", function(req, res) {
    turmaController.cadastrarTurma(req, res);
})
  
module.exports = router;