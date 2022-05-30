var database = require("../database/config")

function entrar(email, senha) {
    var instrucao = `
    SELECT * FROM [dbo].[Usuario] WHERE email = '${email}' AND senha = '${senha}';
    
`;
console.log("Executando a instrução SQL: \n"+instrucao);
return database.executar(instrucao);

}

module.exports = {
    entrar
};