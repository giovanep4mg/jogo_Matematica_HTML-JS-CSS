/**criar duas variáveis,num1 e num2.
 * Math.randon() * 10 > fará 10 números aleatório,em decimais.
 * Math.ceil > pega esses 10 números, e coloca eles em inteiro.
 */
const num1s = Math.ceil(Math.random() * 10)
const num2s = Math.ceil(Math.random() * 10)

//pega o que está no id "questaoSoma" e salva na variável "questaoSomaE1".
const questaoSomaE1 = document.getElementById("questaoSoma");

//pega o que está no id "inputSoma" e salva na variável "inputSomaE1".
const inputSomaE1 = document.getElementById("inputSoma");

//pega o que está no id "formSoma" e salva na variável "formSomaE1".
const formSomaE1 = document.getElementById("formSoma");

//pega o que está no id "pontoS" e salva na variável "pontoSE1".
const pontoSomaE1 = document.getElementById("pontoS")

//
let pontoS = JSON.parse(localStorage.getItem("pontoS"));
console.log("pontos:  " + pontoS)

/*
Se dentro da variável "ponto",
não estiver em zero.
adicione um zero
 */
if (!pontoS) {
    pontoS = 0;
}

//pega o valor na var "pontoE1" e exibi na tela
pontoSomaE1.innerText = "ponto :" + pontoS;

//pega os valores da var "questaoE1", e exibi na tela, com algumas modificações nos números.
questaoSomaE1.innerText = "Quanto é " + num1s + " + " + num2s + " ? "

//pega os números e multiplica eles, depois salva na var "correctAns"(resposta_correta)
const correctSomaAns = num1s + num2s;

//adiciona um ouvinte, no botão "submit"
formSomaE1.addEventListener("submit", () => {

    //pega o valor adicionado no "input",e salva na var "userAns"(resposta_usuario)
    const userAnsSoma = +inputSomaE1.value;

    //se (resposta_usuario é igual a resposta_correta)
    if (userAnsSoma == correctSomaAns) {

        //se for igual, adiciona +1 na var "ponto"
        pontoS++;

        //executa a função "updateLocalStorage()"
        updateLocalStorageSoma()
        //senão
    } else {

        //se não for igual, retira -1, na var "ponto"
        pontoS--;

        //executa a função "updateLocalStorage()"
        updateLocalStorageSoma()
    }

})

function updateLocalStorage() {
    localStorage.setItem("pontoS", JSON.stringify(+pontoS))
}



console.log("update local storage soma  :" + updateLocalStorage())
