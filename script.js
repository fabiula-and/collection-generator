const temas = [
    "Funeral",
    "Casamento",
    "Escola",
    "Supermercado",
    "Hospital"
];

document.getElementById("gerar").addEventListener("click", function() {

    const temaSorteado = temas[Math.floor(Math.random() * temas.length)];

    document.getElementById("tema").textContent = temaSorteado;

});
