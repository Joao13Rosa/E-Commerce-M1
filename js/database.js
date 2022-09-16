// Banco de dados dos produtos

const data = [{
    id: 1,
    img: "./img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "./img/gorro.svg",
    nameItem: "Black Hat",
    description: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "./img/mascara.svg",
    nameItem: "Mask",
    description: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "./img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "./img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "./img/moletom.svg",
    nameItem: "Champion Jacket",
    description: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
];

//SELECIONANDO
const ul = document.querySelector("ul");
const divProdutos = document.querySelector(".produtos");
const buttonHeader = document.querySelectorAll(".button-header");
//const buttonAddProduto = document.querySelectorAll(".add-produto");
const divCarrinho = document.querySelector(".carrinho")
const addProduto = document.getElementsByClassName("add-produto");
const pTotal = document.getElementsByClassName("text-total");


function criar(data) {
  for (let i = 0; i < data.length; i++) {
    const products = data[i];


    //CRIANDO
    const li = document.createElement("li");
    const img = document.createElement("img");
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const pCategoria = document.createElement("p");
    const pDescricao = document.createElement("p");
    const pValor = document.createElement("p");
    const buttonProduto = document.createElement("button");

    //COLOCANDO CLASSES
    pCategoria.classList.add("categoria");
    buttonProduto.classList.add("add-produto");

    buttonProduto.addEventListener('click', minhaFunc)


    img.src = products.img;
    h2.innerText = products.nameItem;
    pCategoria.innerText = products.tag;
    pDescricao.innerText = products.description;
    pValor.innerText =  "R$ " + products.value + ",00";
    buttonProduto.innerText = "Adicionar carrinho"

    ul.appendChild(li);
    li.append(img, section);
    section.append(pCategoria, h2, pDescricao, pValor, buttonProduto);
  }
}
criar(data)

function minhaFunc(separador){
  if(divCarrinho.firstChild.nextSibling.innerText === "Carrinho vazio"){
    divCarrinho.removeChild(divCarrinho.firstChild);
    divCarrinho.removeChild(divCarrinho.firstChild);
  }

  if(divCarrinho.firstChild.nextSibling.innerText === "Adicione itens"){
    divCarrinho.removeChild(divCarrinho.firstChild);
    divCarrinho.removeChild(divCarrinho.firstChild);
    }
  const divCarrinhoProduto = document.createElement('div');
  const imgCarrinho = document.createElement('img');
  const sectionCarrinho = document.createElement('section');
  const h4 = document.createElement('h4');
  const pCarrinho = document.createElement('p');
  const buttonRemover = document.createElement('button');

  divCarrinhoProduto.classList.add("carrinho-produto");
  imgCarrinho.classList.add('img-carrinho');
  sectionCarrinho.classList.add('produto-no-carrinho');
  pCarrinho.classList.add('valor-carrinho');
  buttonRemover. classList.add('remover-produto');

  imgCarrinho.src = separador.img;
  h4.innerText = separador.nameItem;
  pCarrinho.innerText = 'R$ ' + separador.value + ",00";
  buttonRemover.innerText = "Remover produto"

  divCarrinhoProduto.append(imgCarrinho, sectionCarrinho);
  sectionCarrinho.append(h4, pCarrinho, buttonRemover);
  
  buttonRemover.addEventListener("click", function(){
    divCarrinhoProduto.remove(divCarrinhoProduto)
    
  })

  return divCarrinhoProduto
}

function enviar(){
  for(let i = 0; i < addProduto.length; i++){
    addProduto[i].addEventListener("click", function(){
      const separador = data[i];
      const funcao = minhaFunc(separador);
      divCarrinho.appendChild(funcao);
    })
  }
}
enviar()