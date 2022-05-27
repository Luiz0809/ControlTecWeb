var dashboardModel = require("../models/dashboardModel");

function requisitarValoresCpuDatabase(req, res) {
    dashboardModel.requisitarValoresCpuDatabase()
    .then(function (resultado) {
        console.log('resultado', resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

exports.get = (req,res) => {
    requisitarValoresCpuDatabase(req, res);
};