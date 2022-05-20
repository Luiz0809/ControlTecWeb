var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
        var instrucao = `
        SELECT * FROM instituicao WHERE email = '${email}' AND senha = '${senha}';
        
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
    
}

function cadastrar(nome, numero, rua, bairro, cep, complemento, pontoreferencia, cidade, estado, email, senha) {
    var instrucao = `
        INSERT INTO [dbo].[Instituicao]  VALUES ('${nome}', '${numero}', 
        '${rua}','${bairro}','${cep}','${complemento}','${pontoreferencia}','${cidade}','${estado}','${email}','${senha}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};