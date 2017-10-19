// Validando os dados digitados no index.html

function validaUser(){  //criei a função
    var email = formulario1.email.value; // criando as variaveis com o conteudo do html
    var senha = formulario1.senha.value;

    if (email == ""){
        alert("Nenhum E-mail adicionado"); // vai alertar que nao foi digitado nenhum email.
        return false;
    } else if (email.length < 5){
        alert("Você deve digitar algum email com no mínimo 5 caracteres");
        return false; //retonando falso não deixamos a página prosseguir.
    } else if (email.length > 35){
        alert("Você excedeu o limite de caracteres pro email, o máximo é de 35!");
        return false;
    } else if (email.lenght == 20) {
        return true; //retornando true a página segue.
    } else if (email.lenght < 20){
        return true;
    } 
    
    if (senha == ""){
        alert("Você deve digitar alguma senha, pra prosseguir.");
        return false;
    } else if (senha.length < 5) {
        alert("Senha deve conter no mínimo 5 caracteres.");
        return false;
    } else if (senha.length > 15){
        alert("Senha grande de mais, ela deve conter no máximo 15 caracteres.");
        return false;
    } else if (senha.length < 15) {
        alert("Parabéns você está cadastrado.")
        return true;
    }
    
}

