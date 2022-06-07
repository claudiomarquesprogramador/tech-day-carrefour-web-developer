//começo do carrossel
let tempo = 5000;
let tempoImagem = 0;
let imagens = document.querySelectorAll("#carrossel img");
let max = imagens.length;

function proximaImagem() {
    imagens[tempoImagem]
        .classList.remove("foco")

    tempoImagem++

    if(tempoImagem >= max)
        tempoImagem = 0

    imagens[tempoImagem]
        .classList.add("foco")
}

function comecar() {
    setInterval(() => {
        proximaImagem()
    }, tempo)
}
window.addEventListener("load", comecar);
//final do carrossel.

//function aberta ao clicar no botão mercado
function abrirMercado() {
    let cep = prompt("Digite seu CEP!","Apenas números.");
    console.log("CEP: " + cep);
    document.getElementById("mercado").style.display="flex"; //aba de mercado irá aparecer

    pegarLoja();
}

function pegarLoja() {
    fetch('sellers.json') //api funcionando usaria fetch(`https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode={cep}`)
    .then(res => res.json())
    .then(data => {
        let seller_name = data[0].sellers[0].id;
        console.log("Loja Carrefour");
        console.log(seller_name);

        fetch('products.json') //api funcionando usaria fetch(`https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq={seller_name}`)
        .then(res => res.json())
        .then(data => {
            console.log("Imagem do produto 1");
            console.log(data[0].items[0].images[0].imageUrl);
            console.log("Título do produto 1");
            console.log(data[0].productTitle);
            console.log("Preço do produto 1");
            console.log(data[0].items[0].sellers[0].commertialOffer.Price);
        })
    })
    .catch((error) => {
        console.error(error);
    })
}