let nome = [];
let email = [];
let campo_nome = 0;
let campo_email = 0;
let senha_confirm = 0;

function cadastro() {
    document.getElementById("botao").disabled = true;
    let nome_formulario = document.getElementById("NomeCompleto").value

    for (let i in nome) {
        let nome_atual = nome[i];
        if (nome_atual == nome_formulario) {
            document.getElementById("teste").style.display = 'block'
            document.getElementById("NomeCompleto").classList.add("input-vermelho")
            document.getElementById("botao").disabled = false;
            campo_nome = 0;
            return false
        } else {
            document.getElementById("NomeCompleto").classList.add("input-verde")
            campo_nome = 1;
        }
    }



    let email_formulario = document.getElementById("E-mail").value

    for (let i in email) {
        let email_novo = email[i];
        if (email_novo == email_formulario) {
            document.getElementById("teste1").style.display = 'block'
            document.getElementById("E-mail").classList.add("input-vermelho")
            document.getElementById("botao").disabled = false;
            campo_email = 0;
            return false
        } else {
            document.getElementById("E-mail").classList.add("input-verde")
            campo_email = 1;
        }
    }

    document.getElementById("formulario").reset();


    nome.push(nome_formulario)
    email.push(email_formulario)

    setTimeout(
        function ativar() {
            document.getElementById("botao").disabled = false;
            document.getElementById("botao").classList.remove("buttonsla")
        }, 1000
    )

}

function ChecarSenha() {
    let senha_confirmacao = document.getElementById("SenhaConfirm");

    let senha_atual = document.getElementById("Senha");

    if (senha_confirmacao == senha_atual) {
        document.getElementById("SenhaConfirm").classList.add("input-vermelho")
        document.getElementById("teste2").style.display = 'block'
        document.getElementById("botao").disabled = false;
        senha_confirm = 0;
    } else {
        document.getElementById("SenhaConfirm").classList.add("input-verde")
        senha_confirm = 1;
    }




}


