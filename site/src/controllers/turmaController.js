var turmaModel = require("../models/turmaModel");

var sessoes = [];

function testar (req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function cadastrarTurma(req, res) {
    
    var nome = req.body.nome;
    var sala = req.body.sala;
    var descricao = req.body.descricao;
    var fkInstituicao = req.params.fkInstituicao

   
        turmaModel.cadastrarTurma(nome, sala, descricao, fkInstituicao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }


module.exports = {
    cadastrarTurma
    
}