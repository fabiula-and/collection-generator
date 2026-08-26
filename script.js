const temas = [
    "Funeral",
    "Casamento",
    "Escola",
    "Supermercado",
    "Hospital"
];

let modoSelecionado = "ideia";
let escalaSelecionada = "1 peça";


// ===== MODOS =====

const botoesModo = document.querySelectorAll("[id^='modo-']");

botoesModo.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoesModo.forEach(function(b) {
            b.style.backgroundColor = "";
            b.style.color = "";
        });

        botao.style.backgroundColor = "#111827";
        botao.style.color = "white";

        modoSelecionado = botao.id.replace("modo-", "");

        console.log("Modo escolhido:", modoSelecionado);

    });

});


// ===== ESCALA =====

const botoesEscala = document.querySelectorAll(".escala");

botoesEscala.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoesEscala.forEach(function(b) {
            b.style.backgroundColor = "";
            b.style.color = "";
        });

        botao.style.backgroundColor = "#111827";
        botao.style.color = "white";

        escalaSelecionada = botao.textContent;

        console.log("Escala escolhida:", escalaSelecionada);

        document.getElementById("escala").textContent = escalaSelecionada;

    });

});


// ===== BOTÃO GERAR =====

document.getElementById("gerar").addEventListener("click", function() {

    console.log("Gerando modo:", modoSelecionado);
    
    const temaSorteado = temas[Math.floor(Math.random() * temas.length)];

    document.getElementById("tema").textContent = temaSorteado;

});
