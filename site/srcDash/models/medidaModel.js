var database = require("../database/config");

function requisitarValoresCpuDatabase() {
    instrucaoSql = `select consumoCPU from [dbo].[UsoDeMaquina]`;
    console.log("Executando a instrução SQL: \n"+ instrucaoSql);
    return database.executar.json(instrucaoSql);
}

module.exports = {
    requisitarValoresCpuDatabase
}