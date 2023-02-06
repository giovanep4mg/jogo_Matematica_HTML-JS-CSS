/**criar duas variáveis,num1 e num2.
 * Math.randon() * 10 > fará 10 números aleatório,em decimais.
 * Math.ceil > pega esses 10 números, e coloca eles em inteiro.
 */
const num1s = Math.ceil(Math.random() * 10)
const num2s = Math.ceil(Math.random() * 10)
console.log("numero1 " + num1s)
console.log("numero2 " + num2s)


//pega o que está no id "questaoSoma" e salva na variável "questaoSomaE1".
const questaoSomaE1 = document.getElementById("questaoSoma");
console.log("pergunta" + questaoSomaE1.innerText)

//pega o que está no id "inputSoma" e salva na variável "inputSomaE1".
const inputSomaE1 = document.getElementById("inputSoma");
console.log("Campo de texto " + inputSomaE1.innerText)

//pega o que está no id "formSoma" e salva na variável "formSomaE1".
const formSomaE1 = document.getElementById("formSoma");
console.log("titulo, ponto, pergunta, campo de texto :" + formSomaE1.innerText)

//pega o que está no id "pontoS" e salva na variável "pontoSE1".
const pontoSomaE1 = document.getElementById("pontoS")
console.log("texto sobre pontos e quanto tem  " + pontoSomaE1.innerText)


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
console.log("SE PONTOS:  " + pontoS)


//pega o valor na var "pontoE1" e exibi na tela
pontoSomaE1.innerText = "ponto :" + pontoS;
console.log("para exibir quantos pontos tem  " + pontoSomaE1.innerText)


//pega os valores da var "questaoE1", e exibi na tela, com algumas modificações nos números.
questaoSomaE1.innerText = "Quanto é " + num1s + " + " + num2s + " ? "
console.log("exibi a pergunta com numeros aleatorios:  " + questaoSomaE1.innerText)



//pega os números e multiplica eles, depois salva na var "correctAns"(resposta_correta)
const correctSomaAns = num1s + num2s;
console.log("soma os numeros, para corrigir  " + correctSomaAns.innerText)




//adiciona um ouvinte, no botão "submit"
formSomaE1.addEventListener("submit", () => {

    //pega o valor adicionado no "input",e salva na var "userAns"(resposta_usuario)
    const userAnsSoma = +inputSomaE1.value;
    console.log("valor adicionado no input" + userAnsSoma.innerText)

    //se (resposta_usuario é igual a resposta_correta)
    if (userAnsSoma == correctSomaAns) {

        //se for igual, adiciona +1 na var "ponto"
        pontoS++;
        console.log("pontos a mais no pontos:   " + pontoS++)
        //executa a função "updateLocalStorage()"
        updateLocalStorage()
        //senão
    } else {

        //se não for igual, retira -1, na var "ponto"
        pontoS--;
        console.log("pontos a menos no pontos:   " + pontoS--)
        //executa a função "updateLocalStorage()"
        updateLocalStorage()
    }

})
console.log(" modifica a form, faz a comparaçao do numeros,se acertou ou nao, e salva no ponto  :" + formSomaE1)


function updateLocalStorage() {
    localStorage.setItem("pontoS", JSON.stringify(+pontoS))
}



console.log("update local storage soma  :" + updateLocalStorage())
