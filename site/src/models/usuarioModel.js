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
        SELECT * FROM [dbo].[Instituicao] WHERE email = '${email}' AND senha = '${senha}';
        
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
    
}

function cadastrarUsuario(nome, dataNascimento, email, senha, tipoDeUsuario, fkInstituicao) {
    var instrucao = `
        INSERT INTO [dbo].[Usuario] VALUES ('${nome}', '${dataNascimento}', 
        '${email}','${senha}','${tipoDeUsuario}','${fkInstituicao}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrarUsuario,
    listar,
};