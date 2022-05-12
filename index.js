let nome = [];
let email = [];

function cadastro() {
    document.getElementById("botao").disabled = true;
    let nome_formulario = document.getElementById("NomeCompleto").value

    for (let i in nome) {
        let nome_atual = nome[i];
        if (nome_atual == nome_formulario) {
            alert("error");
            document.getElementById("botao").disabled = false;
            return false
        }
    }
    let email_formulario = document.getElementById("E-mail").value

    for (let i in email) {
        let email_novo = email[i];
        if (email_novo == email_formulario) {
            alert("insira outro e-mail");
            document.getElementById("botao").disabled = false;
            return false;
        }
    }

    document.getElementById("formulario").reset();


    nome.push(nome_formulario)
    email.push(email_formulario)

    setTimeout(
        function ativar() {
            document.getElementById("botao").disabled = false;
        }, 1000
    )

}

function ChecarSenha() {
    let senha_confirmacao = document.getElementById("SenhaConfirm");

    let senha_atual = document.getElementById("Senha");

    if(senha_confirmacao == senha_atual){
        


    }




}


