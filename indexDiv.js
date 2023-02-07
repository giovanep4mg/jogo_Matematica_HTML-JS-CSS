/**criar duas variáveis,num1 e num2.
 * Math.randon() * 10 > fará 10 números aleatório,em decimais.
 * Math.ceil > pega esses 10 números, e coloca eles em inteiro.
 */
const num1Div = Math.ceil(Math.random() * 100)
const num2Div = Math.ceil(Math.random() * 2)

//pega a tag id "questao", salva na var "questaoE1"
const questaoDivE1 = document.getElementById("questaoDiv");

//pega a tag id "input", salva na var "inputE1"
const inputDivE1 = document.getElementById("inputDiv");

//pega a tag id "form", salva na var "formE1"
const formDivE1 = document.getElementById("formDiv");

//pega a tag id "ponto", salva na var "pontoE1"
const pontoDivE1 = document.getElementById("pontoDiv")

//
let pontoDiv = JSON.parse(localStorage.getItem("pontoDiv"));

// se (não ponto)
if (!pontoDiv) {
    pontoDiv = 0;
}

//pega o valor na var "pontoE1" e exibi na tela
pontoDivE1.innerText = "ponto :" + pontoDiv;

//pega os valores da var "questaoE1", e exibi na tela, com algumas modificações nos números.
questaoDivE1.innerText = "Quanto é " + num1Div + " dividido por " + num2Div + " ? "


//pega os números e multiplica eles, depois salva na var "correctAns"(resposta_correta)
const correctDivAns = num1Div / num2Div;

//adiciona um ouvinte, no botão "submit"
formDivE1.addEventListener("submit", () => {

    //pega o valor adicionado no "input",e salva na var "userAns"(resposta_usuario)
    const userAns = +inputDivE1.value;

    //se (resposta_usuario é igual a resposta_correta)
    if (userAns == correctAns) {

        //se for igual, adiciona +1 na var "ponto"
        pontoDiv++

        //executa a função "updateLocalStorage()"
        updateLocalStorageDiv()
        //senão
    } else {
        //se não for igual, retira -1, na var "ponto" 
        pontoDiv--
        //executa essa função "updateLocalStorage"
        updateLocalStorageDiv()
    }

})

//Função, vai atualizar os pontos
function updateLocalStorageDiv() {

    localStorage.setItem("pontoDiv", JSON.stringify(pontoDiv))
}


