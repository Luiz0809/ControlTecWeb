var database = require("../database/config");

function listar() {
    var instrucaoSql = `SELECT TOP (8) * FROM [dbo].[UsoDeMaquina] where Usuario = 5 order by hora DESC`;
    console.log("Executando a instrução SQL: \n"+ instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
   listar
}