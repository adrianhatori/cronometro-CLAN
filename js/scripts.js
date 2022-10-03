let targetTime = "19:30";
let time = new Date().toLocaleTimeString();
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");

//atualiza horario
function refreshTime() {
    //pega horario do computador
    time = new Date().toLocaleTimeString();
}

//Função inicia contagem regressiva
function start() {
    refreshTime();
}

//ao carregar a página a função startTimer é chamada
window.onload = start();