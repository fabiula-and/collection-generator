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

document.getElementById("modo-ideia").addEventListener("click", function() {
    modoSelecionado = "ideia";
    console.log("Modo escolhido:", modoSelecionado);
});

document.getElementById("modo-estampa").addEventListener("click", function() {
    modoSelecionado = "estampa";
    console.log("Modo escolhido:", modoSelecionado);
});

document.getElementById("modo-mini").addEventListener("click", function() {
    modoSelecionado = "mini";
    console.log("Modo escolhido:", modoSelecionado);
});

document.getElementById("modo-completa").addEventListener("click", function() {
    modoSelecionado = "completa";
    console.log("Modo escolhido:", modoSelecionado);
});

document.getElementById("modo-caos").addEventListener("click", function() {
    modoSelecionado = "caos";
    console.log("Modo escolhido:", modoSelecionado);
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

    const temaSorteado = temas[Math.floor(Math.random() * temas.length)];

    document.getElementById("tema").textContent = temaSorteado;

});
