// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    
    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;       
        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}
   
function limparSessao() {
   // aguardar();
    sessionStorage.clear();
   // finalizarAguardar();
    window.location = "../login.html";
}
