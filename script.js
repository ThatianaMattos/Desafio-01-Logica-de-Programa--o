document.addEventListener("DOMContentLoaded", function() {
    // Mostre a mensagem "Ano novo está chegando!!" no navegador
    console.log("Ano novo está chegando!!")
    document.getElementById("mensagem").innerHTML = "Ano novo está chegando!!"

    // Crie uma variável que receba o nome da cantora Mariah Carey
    const nomecantora = "Mariah Carey"

    // Crie uma variável que receba a idade dela
    let idadeMariah = 55 // A idade pode variar dependendo do ano atual

    // Crie a variável que vai mostar o ano atual
    let anoAtual = 2024 // O ano atual variarà sempre com base na data de carregamento

    // Crie uma variável com o ano atual e subtraia pelo o valor da idade da Mariah Carey
    const anoNascimentoMariah = new Date().getFullYear() - idadeMariah

    // Crie atualize o elemento HTML com o ID "ano-nasc" para exibir o ano de nascimento de Mariah Carey
    console.log(`A cantora ${nomecantora} nasceu no ano de ${anoNascimentoMariah}. Como estamos no ano de ${anoAtual}, atualmente, a cantora tem ${idadeMariah} anos.`)

    // Exiba a mensagem "Mariah Carey nasceu em XXXX" no navegador
    document.getElementById("procedimento").innerHTML += `${nomecantora} nasceu em ${anoNascimentoMariah}<br>`

    // Solicite a idade da pessoa e armazene em uma variável
    const suaIdade = parseInt(prompt("Digite a sua idade:"))

    // Crie uma condição SE você for maior ou igual a 18
    if (suaIdade >= 18) {
      // Exiba a mensagem "Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey." no navegador
      document.getElementById("procedimento").innerHTML += `Você é maior de idade e poderá curtir o show do Roberto Carlos com participação especial de ${nomecantora}.<br>`
    } else {
      // Exiba a mensagem "Sinto muito, mas assistirá da tv globo" no navegador
      document.getElementById("procedimento").innerHTML += `Sinto muito, mas você é menor de idade e assistirá o show do Roberto Carlos com participação especial de ${nomecantora} pela TV Globo.<br>`
    }
})