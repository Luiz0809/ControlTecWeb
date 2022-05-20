var database = require("../database/config")


function cadastrarMaquina(ipt_identify, ipt_system) {
    var instrucao = `
        INSERT INTO maquina (identificador, sistemaOperacional) VALUES ('${ipt_identify}', '${ipt_system}');
    `;

    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastraComponentes(ipt_name_disk, ipt_model_disk, ipt_lenth_disk, ipt_name_memory, ipt_model_memory, ipt_lenth_memory){

    var instrucao = `INSERT INTO componentes (nomeComponente, modeloComponente, tamanhoComponenteEmBytes, fkMaquina) VALUES
    ('${ipt_name_disk}','${ipt_model_disk}', '${ipt_lenth_disk}')`

    var instrucao2 = `INSERT INTO componentes (nomeComponente, modeloComponente, tamanhoComponenteEmBytes, fkMaquina) VALUES
    ('${ipt_name_memory}','${ipt_model_memory}', '${ipt_lenth_memory}')`

    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao)
    return database.executar(instrucao2)

}

module.exports = {
    cadastrarMaquina,
    cadastraComponentes,
};