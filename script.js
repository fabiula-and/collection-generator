const temas = [
    "Funeral",
    "Casamento",
    "Escola",
    "Supermercado",
    "Hospital"
];

let modoSelecionado = "ideia";
let escalaSelecionada = "1 peça";

function selecionarEscala(valor) {
    escalaSelecionada = valor;
    console.log("Escala escolhida:", escalaSelecionada);
}

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

document.getElementById("escala-1peca").addEventListener("click", function() {
    selecionarEscala("1 peça");
});

document.getElementById("escala-1look").addEventListener("click", function() {
    selecionarEscala("1 look");
});

document.getElementById("escala-3looks").addEventListener("click", function() {
    selecionarEscala("3 looks");
});

document.getElementById("escala-5looks").addEventListener("click", function() {
    selecionarEscala("5 looks");
});

document.getElementById("escala-8looks").addEventListener("click", function() {
    selecionarEscala("8 looks");
});

document.getElementById("escala-12looks").addEventListener("click", function() {
    selecionarEscala("12 looks");
});

document.getElementById("escala-15looks").addEventListener("click", function() {
    selecionarEscala("15 looks");
});

document.getElementById("escala-3estampas").addEventListener("click", function() {
    selecionarEscala("3 estampas");
});

document.getElementById("escala-5estampas").addEventListener("click", function() {
    selecionarEscala("5 estampas");
});

document.getElementById("escala-7estampas").addEventListener("click", function() {
    selecionarEscala("7 estampas");
});

document.getElementById("escala-9estampas").addEventListener("click", function() {
    selecionarEscala("9 estampas");
});

document.getElementById("escala-editorial").addEventListener("click", function() {
    selecionarEscala("1 editorial");
});

document.getElementById("gerar").addEventListener("click", function() {

    const temaSorteado = temas[Math.floor(Math.random() * temas.length)];

    document.getElementById("tema").textContent = temaSorteado;

});
