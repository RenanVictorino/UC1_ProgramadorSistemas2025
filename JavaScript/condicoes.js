let idade, senha, termos

esconderInput()

function salvarIdade(){
   idade = parseInt(document.querySelector("#inputIdade").value)

    //condiçoes
    if (idade > 17){
        alert("Você já pode tirar CNH! ")
    } else{
        alert("Muito novo para tirar CNH!")
    }
}

function salvarSenha(){
    senha = document.querySelector("#inputSenha").value

    //condições
    if(senha == "admin"){
        alert("Acesso concedido!")
        input()
    } else{
        alert("Senha incorreta. ANIMAL !!")
    }
   
}

function salvarTermos(){
   termos = document.querySelector("#inputTermos").checked

    if(termos == false){
        document.querySelector("#span").innerHTML = "Termo não foi aceito"
    }else{
        document.querySelector("#span").innerHTML = "Termo aceito"

    }

}
function esconderInput(){
    document.querySelector("#input").style.display = "none"
}
function input(){
    document.querySelector("#input").style.display = "block"
}