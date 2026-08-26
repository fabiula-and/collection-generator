const temas = [
    "Funeral",
    "Casamento",
    "Escola",
    "Supermercado",
    "Hospital"
];

const temaSorteado = temas[Math.floor(Math.random() * temas.length)];

console.log(temaSorteado);
