const temas = [
    "Romantismo",
    "Infantil",
    "Esportivo",
    "Religioso",
    "Tropical",
    "Nostálgico",
    "Burocrático",
    "Doméstico",
    "Uniforme",
    "Folclórico",
    "Aristocrático",
    "Suburbano",
    "Campestre",
    "Náutico",
    "Militar",
    "Alienígena",
    "Decadência",
    "Celebração",
    "Luto",
    "Sonho",
    "Pesadelo",
    "Cotidiano",
    "Infância",
    "Velhice",
    "Maternidade",
    "Trabalho",
    "Escola",
    "Hospital",
    "Supermercado",
    "Igreja",
    "Parque",
    "Motel",
    "Cassino",
    "Circo",
    "Carnaval",
    "Funeral",
    "Casamento",
    "Prisão",
    "Escritório",
    "Shopping",
    "Aeroporto",
    "Férias",
    "Restaurante",
    "Biblioteca",
    "Museu",
    "Feira",
    "Brinquedoteca",
    "Jardim",
    "Praia",
    "Acampamento",
    "Fazenda",
    "Política",
    "Dinheiro",
    "Pobreza",
    "Adolescência",
    "Dentista",
    "Piquenique",
    "Pensão",
    "Creche",
    "Academia",
    "Salão de beleza",
    "Pet shop",
    "Cartório",
    "Delegacia",
    "Divórcio",
    "Lua de mel",
    "Velório",
    "Aniversário",
    "Férias escolares"
];

const cores = [
    "Rosa + verde",
    "Laranja + roxo",
    "Amarelo + azul",
    "Vermelho + rosa",
    "Marrom + lilás",
    "Verde + rosa",
    "Azul + laranja",
    "Bege + vermelho",
    "Cinza + amarelo",
    "Roxo + verde",
    "Pastel",
    "Neon",
    "Primárias",
    "Terrosos",
    "Fluorescentes",
    "Monocromático",
    "Tons doces",
    "Tons sujos",
    "Cores bebê",
    "Cores ácidas",
    "Branco total",
    "Vermelho total",
    "Azul total",
    "Marrom total",
    "Rosa total",
    "Lavanda",
    "Coral",
    "Turquesa",
    "Mostarda",
    "Pistache",
    "Pêssego",
    "Magenta",
    "Ciano",
    "Caramelo",
    "Vinho",
    "Holográfico / Furtacor"
];

const materiais = [
    "Plástico",
    "Vinil",
    "Tule",
    "Renda",
    "Cetim",
    "Veludo",
    "Crochê",
    "Jeans",
    "Couro",
    "Metal",
    "Borracha",
    "Acrílico",
    "Organza",
    "Pelúcia",
    "Paetê",
    "Lantejoula",
    "Transparência",
    "Matelassê",
    "Felpudo",
    "Amassado",
    "Molhado",
    "Brilhante",
    "Opaco",
    "Translúcido",
    "Espelhado"
];

const estampas = [
    "Floral",
    "Animal",
    "Geométrico",
    "Tipográfico",
    "Fotográfico",
    "Abstrato",
    "Paisagem",
    "Xadrez",
    "Listras",
    "Poá",
    "Camuflagem",
    "Toile",
    "Heráldico",
    "Barroco",
    "Psicodélico",
    "Infantil",
    "Botânico",
    "Anatômico",
    "Cartográfico",
    "Industrial",
    "Digital",
    "Pixelado",
    "3D",
    "Ruído",
    "Colagem",
    "Grafite",
    "Doodle",
    "Ilustração",
    "Microestampa",
    "Maxi-estampa"
];

const linguagens = [
    "Futurista",
    "Tecnológico",
    "Cyberpunk",
    "Kitsch",
    "Minimalismo",
    "Maximalismo",
    "Glamour",
    "Fetiche",
    "Luxuoso",
    "Artesanal",
    "Industrial"
];

const atmosferas = [
    "Nostálgico",
    "Decadente",
    "Eufórico",
    "Melancólico",
    "Onírico",
    "Perturbador",
    "Romântico"
];

const universos = [
    "Submundo",
    "Alta sociedade",
    "Periferia",
    "Futuro próximo",
    "Passado remoto",
    "Mundo infantil",
    "Pós-apocalipse",
    "Vida suburbana"
];

const construcoes = [
    "Oversized",
    "Ajustada",
    "Estruturada",
    "Fluida",
    "Volumosa",
    "Alongada",
    "Encurtada",
    "Assimétrica",
    "Ampulheta",
    "Colunar",
    "Triangular",
    "Trapézio",
    "Cocoon",
    "Balonê",
    "Boxy",
    "Bodycon",
    "Desconstruída",
    "Arquitetônica",
    "Inflada",
    "Drapejada",
    "Escultural",
    "Exagerada"
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
    const corSorteada = cores[Math.floor(Math.random() * cores.length)];

    document.getElementById("tema").textContent = temaSorteado;
    document.getElementById("cor").textContent = corSorteada;


});
