let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
let botaoCarrinho = document.querySelector(".botao-carrinho");
let botoesTenis = document.querySelectorAll(".botoes");

const coresTenis = {
    "verde": "#ccee66",
    "azul": "#58cced",
    "rosa": "#ff9eb5"
};

function mudarVisual(cor, imagem) {
    tenis.classList.add("troca-efeito");
    body.style.background = cor;
    botaoCarrinho.style.backgroundColor = cor;
    botaoCarrinho.style.color = "black";

    setTimeout(() => {
        tenis.src = imagem;
        tenis.classList.remove("troca-efeito");
    }, 500);
}

botoesTenis.forEach(botao => {
    botao.addEventListener("click", () => {
        let corSelecionada = coresTenis[botao.classList.contains("verde") ? "verde" :
                                        botao.classList.contains("azul") ? "azul" :
                                        botao.classList.contains("rosa") ? "rosa" : ""];
        if (corSelecionada) {
            botaoCarrinho.style.backgroundColor = corSelecionada;
            botaoCarrinho.style.color = "black";
        }
    });
});