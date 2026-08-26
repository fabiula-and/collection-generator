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

function sortearDiferente(lista, valorAtual) {

    let novoValor = sortear(lista);

    while (novoValor === valorAtual) {
        novoValor = sortear(lista);
    }

    return novoValor;
}

function sortearMultiplosDiferentes(lista, quantidade, valorAtual) {

    let novosValores;

    do {
        novosValores = sortearVarios(lista, quantidade);
    } while (novosValores.join(" + ") === valorAtual);

    return novosValores.join(" + ");
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

// ===== VISIBILIDADE DO RESULTADO =====

const linhasResultado = {
    tema: document.getElementById("resultado-tema"),
    cor: document.getElementById("resultado-cor"),
    corSecundaria: document.getElementById("resultado-cor-secundaria"),
    material: document.getElementById("resultado-material"),
    estampa: document.getElementById("resultado-estampa"),
    linguagem: document.getElementById("resultado-linguagem"),
    atmosfera: document.getElementById("resultado-atmosfera"),
    universo: document.getElementById("resultado-universo"),
    construcao: document.getElementById("resultado-construcao")
};


function atualizarVisibilidadeResultado(modo) {

    const categoriasVisiveis = {

        livre: [
            "tema",
            "cor",
            "corSecundaria",
            "material",
            "estampa",
            "linguagem",
            "atmosfera",
            "universo",
            "construcao"
        ],

        ideia: [
            "tema",
            "cor",
            "corSecundaria",
            "material",
            "linguagem",
            "atmosfera"
        ],

        conceito: [
            "tema",
            "cor",
            "corSecundaria",
            "material",
            "linguagem",
            "universo",
            "construcao"
        ],

        imersao: [
            "tema",
            "cor",
            "corSecundaria",
            "material",
            "estampa",
            "linguagem",
            "atmosfera",
            "universo",
            "construcao"
        ],

        estampa: [
            "tema",
            "cor",
            "corSecundaria",
            "estampa",
            "atmosfera",
            "universo"
        ],

        caos: [
            "tema",
            "cor",
            "corSecundaria",
            "material",
            "estampa",
            "linguagem",
            "atmosfera",
            "universo",
            "construcao"
        ]
    };


    Object.keys(linhasResultado).forEach(function(categoria) {

        if (categoriasVisiveis[modo].includes(categoria)) {

            linhasResultado[categoria].style.display = "";

        } else {

            linhasResultado[categoria].style.display = "none";

        }

    });
}

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

    atualizarVisibilidadeResultado(modoSelecionado);

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

       ativarRefresh();
}

// ===== REFRESH DAS CATEGORIAS =====

function ativarRefresh() {

    // ===== TEMA =====

    document.getElementById("refresh-tema").onclick = function() {

        const atual = camposResultado.tema.textContent;

        camposResultado.tema.textContent =
            sortearDiferente(temas, atual);
    };


    // ===== COR PRINCIPAL =====

    document.getElementById("refresh-cor").onclick = function() {

    const atual = camposResultado.cor.textContent;

    if (modoSelecionado === "imersao") {

        camposResultado.cor.textContent =
            sortearMultiplosDiferentes(cores, 2, atual);

    } else {

        camposResultado.cor.textContent =
            sortearDiferente(cores, atual);

    }
};

    // ===== COR SECUNDÁRIA =====

    document.getElementById("refresh-cor-secundaria").onclick = function() {

        const atual = camposResultado.corSecundaria.textContent;

        camposResultado.corSecundaria.textContent =
            sortearDiferente(coresSecundarias, atual);
    };


    // ===== MATERIAL =====

    document.getElementById("refresh-material").onclick = function() {

    const atual = camposResultado.material.textContent;

    if (modoSelecionado === "imersao") {

        camposResultado.material.textContent =
            sortearMultiplosDiferentes(materiais, 2, atual);

    } else {

        camposResultado.material.textContent =
            sortearDiferente(materiais, atual);

    }
};

    // ===== ESTAMPA =====

    document.getElementById("refresh-estampa").onclick = function() {

        const atual = camposResultado.estampa.textContent;

        camposResultado.estampa.textContent =
            sortearDiferente(estampas, atual);
    };


    // ===== LINGUAGEM =====

    document.getElementById("refresh-linguagem").onclick = function() {

        const atual = camposResultado.linguagem.textContent;

        camposResultado.linguagem.textContent =
            sortearDiferente(linguagens, atual);
    };


    // ===== ATMOSFERA =====

    document.getElementById("refresh-atmosfera").onclick = function() {

        const atual = camposResultado.atmosfera.textContent;

        camposResultado.atmosfera.textContent =
            sortearDiferente(atmosferas, atual);
    };


    // ===== UNIVERSO =====

    document.getElementById("refresh-universo").onclick = function() {

        const atual = camposResultado.universo.textContent;

        camposResultado.universo.textContent =
            sortearDiferente(universos, atual);
    };


    // ===== CONSTRUÇÃO =====

    document.getElementById("refresh-construcao").onclick = function() {

        const atual = camposResultado.construcao.textContent;

        camposResultado.construcao.textContent =
            sortearDiferente(construcoes, atual);
    };

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

// ===== CAOS =====

function gerarCaos() {

    const temasSorteados = sortearVarios(temas, 2);
    const coresSorteadas = sortearVarios(cores, 2);
    const materiaisSorteados = sortearVarios(materiais, 3);
    const construcoesSorteadas = sortearVarios(construcoes, 2);

    return {
        modo: "Caos",

        tema: temasSorteados.join(" + "),

        cor: coresSorteadas.join(" + "),

        corSecundaria: sortear(coresSecundarias),

        material: materiaisSorteados.join(" + "),

        estampa: sortear(estampas),

        linguagem: sortear(linguagens),

        atmosfera: sortear(atmosferas),

        universo: sortear(universos),

        construcao: construcoesSorteadas.join(" + ")
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

} else if (modoSelecionado === "caos") {

    resultado = gerarCaos();

} else {

    resultado = {
        modo: modoSelecionado
    };

}

    mostrarResultado(resultado);

});
