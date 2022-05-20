var maquinaModel = require("../models/usuarioModel");

var sessoes = [];

function testar (req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function cadastrar(req, res) {
    var ipt_identify = req.body.ipt_identify;
    var ipt_system = req.body.ipt_system;
    var ipt_name_disk = req.body.ipt_name_disk;
    var ipt_model_disk = req.body.ipt_model_disk;
    var ipt_lenth_disk = req.body.ipt_lenth_disk;
    var ipt_name_memory = req.body.ipt_name_memory;
    var ipt_model_memory = req.body.ipt_model_memory;
    var ipt_lenth_memory = req.body.ipt_lenth_memory;;

    if (ipt_identify == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (ipt_system == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (ipt_name_disk == undefined) {
        res.status(400).send("O nome do seu disco está undefined!");
    }else if (ipt_model_disk == undefined) {
        res.status(400).send("O modelo do seu disco está undefined!");
    }else if (ipt_lenth_disk == undefined) {
        res.status(400).send("O tamanho do seu disco está undefined!");
    }else if (ipt_model_memory == undefined) {
        res.status(400).send("O modelo da sua memoria está undefined!");
    }else if (ipt_lenth_memory == undefined) {
        res.status(400).send("O tamanho da sua memoria está undefined!");
    }else if (ipt_name_memory == undefined) {
        res.status(400).send("Seu nome da memoria está undefined!");
    }else {
        usuarioModel.cadastrar(ipt_identify, ipt_system, ipt_name_disk, ipt_model_disk, ipt_lenth_disk, ipt_name_memory, ipt_model_memory, ipt_lenth_memory)
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
}

module.exports = {
    cadastrar,
    testar
}