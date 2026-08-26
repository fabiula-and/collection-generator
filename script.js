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

const coresSecundarias = [
    "Preto",
    "Off-white",
    "Branco",
    "Cinza",
    "Grafite",
    "Carvão",
    "Prata",
    "Creme",
    "Marfim",
    "Bege",
    "Areia",
    "Taupe",
    "Fendi",
    "Caramelo",
    "Marrom",
    "Chocolate",
    "Café",
    "Azul-marinho",
    "Azul-petróleo",
    "Verde-musgo",
    "Verde-oliva",
    "Vinho"
];


// ===== ESTADO =====

let modoSelecionado = "livre";


// ===== FUNÇÕES DE SORTEIO =====

function sortear(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function sortearVarios(lista, quantidade) {
    const copia = [...lista];
    const resultado = [];

    for (let i = 0; i < quantidade; i++) {
        const indice = Math.floor(Math.random() * copia.length);
        resultado.push(copia[indice]);
        copia.splice(indice, 1);
    }

    return resultado;
}


// ===== ELEMENTOS DO RESULTADO =====

const camposResultado = {
    modo: document.getElementById("modo"),
    tema: document.getElementById("tema"),
    cor: document.getElementById("cor"),
    corSecundaria: document.getElementById("cor-secundaria"),
    material: document.getElementById("material"),
    estampa: document.getElementById("estampa"),
    linguagem: document.getElementById("linguagem"),
    atmosfera: document.getElementById("atmosfera"),
    universo: document.getElementById("universo"),
    construcao: document.getElementById("construcao")
};


// ===== LIMPAR RESULTADO =====

function limparResultado() {
    camposResultado.modo.textContent = "";
    camposResultado.tema.textContent = "";
    camposResultado.cor.textContent = "";
    camposResultado.corSecundaria.textContent = "";
    camposResultado.material.textContent = "";
    camposResultado.estampa.textContent = "";
    camposResultado.linguagem.textContent = "";
    camposResultado.atmosfera.textContent = "";
    camposResultado.universo.textContent = "";
    camposResultado.construcao.textContent = "";
}


// ===== MOSTRAR RESULTADO =====

function mostrarResultado(resultado) {

    limparResultado();

    camposResultado.modo.textContent = resultado.modo || "";
    camposResultado.tema.textContent = resultado.tema || "";
    camposResultado.cor.textContent = resultado.cor || "";
    camposResultado.corSecundaria.textContent = resultado.corSecundaria || "";
    camposResultado.material.textContent = resultado.material || "";
    camposResultado.estampa.textContent = resultado.estampa || "";
    camposResultado.linguagem.textContent = resultado.linguagem || "";
    camposResultado.atmosfera.textContent = resultado.atmosfera || "";
    camposResultado.universo.textContent = resultado.universo || "";
    camposResultado.construcao.textContent = resultado.construcao || "";
}


// ===== MODOS =====

const botoesModo = document.querySelectorAll(
    "#modo-livre, #modo-ideia, #modo-conceito, #modo-imersao, #modo-estampa, #modo-caos"
);

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


// ===== SORTEIO LIVRE =====

function gerarLivre() {

    return {
        modo: "Livre",

        tema: sortear(temas),

        cor: sortear(cores),

        corSecundaria: sortear(coresSecundarias),

        material: sortear(materiais),

        estampa: sortear(estampas),

        linguagem: sortear(linguagens),

        atmosfera: sortear(atmosferas),

        universo: sortear(universos),

        construcao: sortear(construcoes)
    };
}

// ===== IDEIA =====

function gerarIdeia() {

    return {
        modo: "Ideia",

        tema: sortear(temas),

        cor: sortear(cores),

        corSecundaria: sortear(coresSecundarias),

        material: sortear(materiais),

        linguagem: sortear(linguagens),

        atmosfera: sortear(atmosferas)
    };
}

// ===== CONCEITO =====

function gerarConceito() {

    return {
        modo: "Conceito",

        tema: sortear(temas),

        cor: sortear(cores),

        corSecundaria: sortear(coresSecundarias),

        material: sortear(materiais),

        linguagem: sortear(linguagens),

        universo: sortear(universos),

        construcao: sortear(construcoes)
    };
}

// ===== IMERSÃO =====

function gerarImersao() {

    const coresSorteadas = sortearVarios(cores, 2);
    const materiaisSorteados = sortearVarios(materiais, 2);

    return {
        modo: "Imersão",

        tema: sortear(temas),

        cor: coresSorteadas.join(" + "),

        corSecundaria: sortear(coresSecundarias),

        material: materiaisSorteados.join(" + "),

        estampa: sortear(estampas),

        linguagem: sortear(linguagens),

        atmosfera: sortear(atmosferas),

        universo: sortear(universos),

        construcao: sortear(construcoes)
    };
}

// ===== ESTAMPA =====

function gerarEstampa() {

    return {
        modo: "Estampa",

        tema: sortear(temas),

        cor: sortear(cores),

        corSecundaria: sortear(coresSecundarias),

        estampa: sortear(estampas),

        atmosfera: sortear(atmosferas),

        universo: sortear(universos)
    };
}

// ===== GERAR =====

document.getElementById("gerar").addEventListener("click", function() {

    console.log("Gerando modo:", modoSelecionado);

    let resultado;

   if (modoSelecionado === "livre") {

    resultado = gerarLivre();

} else if (modoSelecionado === "ideia") {

    resultado = gerarIdeia();

} else if (modoSelecionado === "conceito") {

    resultado = gerarConceito();

} else if (modoSelecionado === "imersao") {

    resultado = gerarImersao();

} else if (modoSelecionado === "estampa") {

    resultado = gerarEstampa();

} else {

    resultado = {
        modo: modoSelecionado
    };

}

    mostrarResultado(resultado);

});
