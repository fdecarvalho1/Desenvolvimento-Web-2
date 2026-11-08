
// Pegando os elementos do HTML
const campoNome = document.getElementById("nomePokemon");
const botaoBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

// Mostra uma mensagem na tela
function mostrarMensagem(mensagem) {
    resultado.replaceChildren();

    const texto = document.createElement("p");
    texto.textContent = mensagem;

    resultado.appendChild(texto);
}

// Cria uma informação do Pokémon
function criarInformacao(titulo, valor) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = titulo + ": " + valor;

    return paragrafo;
}

// Mostra os dados do Pokémon na tela
function mostrarPokemon(pokemon) {
    resultado.replaceChildren();

    const titulo = document.createElement("h2");
    titulo.textContent = pokemon.name.toUpperCase();

    const imagem = document.createElement("img");
    imagem.src = pokemon.sprites.front_default;
    imagem.alt = "Imagem do " + pokemon.name;

    resultado.appendChild(titulo);
    resultado.appendChild(imagem);

    resultado.appendChild(criarInformacao(
        "Tipo", pokemon.types.map(item => item.type.name).join(", ")
    ));

    resultado.appendChild(criarInformacao(
        "Altura", (pokemon.height / 10) + " metros"
    ));

    resultado.appendChild(criarInformacao(
        "Peso", (pokemon.weight / 10) + " kg"
    ));

    resultado.appendChild(criarInformacao(
        "Experiência base", pokemon.base_experience
    ));
}

// Busca o Pokémon na API
async function buscarPokemon() {
    const nome = campoNome.value.trim().toLowerCase();

    if (nome === "") {
        mostrarMensagem("Digite o nome de um Pokémon!");
        return;
    }

    mostrarMensagem("Carregando...");

    try {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nome}`
        );

        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado!");
        }

        const pokemon = await resposta.json();

        mostrarPokemon(pokemon);

    } catch (erro) {
        mostrarMensagem(erro.message === "Pokémon não encontrado!"
            ? erro.message
            : "Erro ao buscar Pokémon. Verifique sua internet e tente novamente."
        );
    }
}

// Ação do botão
botaoBuscar.addEventListener("click", buscarPokemon);
