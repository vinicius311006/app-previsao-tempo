const chave = "d48d443a08914c983704328f79060e2a"

function colocarNaTela(dados) {
    console.log(dados)
    
    // Atualiza os textos na tela com os dados da API
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    
    // Atualiza o ícone do tempo
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    // Faz a requisição para a API da OpenWeather
    const dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        cidade + 
        "&appid=" + chave + 
        "&lang=pt_br" + 
        "&units=metric"
    ).then(resposta => resposta.json())

    colocarNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}