var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrarTurma(nome, descricao, sala, fkInstituicao) {
    var instrucao = `
        INSERT INTO [dbo].[Turma] VALUES ('${nome}', '${descricao}', 
        '${sala}','${fkInstituicao}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarTurma,
    listar
};