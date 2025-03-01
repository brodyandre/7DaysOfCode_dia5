// Inicializa um objeto de categorias com arrays vazios
let listaDeCompras = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
  outros: []
};

// Função para exibir a lista de compras organizada por categorias
function exibirListaDeCompras() {
  console.log("Lista de compras:");
  for (let categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
      console.log(`    ${capitalize(categoria)}: ${listaDeCompras[categoria].join(', ')}`);
    }
  }
}

// Função para capitalizar a primeira letra de cada palavra
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função principal do programa
function adicionarItem() {
  let continuar = prompt("Você deseja adicionar uma comida à lista? (sim/não)").toLowerCase();
  
  while (continuar === "sim") {
    let item = prompt("Qual comida você deseja adicionar?");
    let categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces, outros)").toLowerCase();

    // Verifica se a categoria existe
    if (listaDeCompras[categoria]) {
      listaDeCompras[categoria].push(item);
    } else {
      console.log("Categoria inválida! Adicionando à categoria 'outros'.");
      listaDeCompras.outros.push(item);
    }

    continuar = prompt("Você deseja adicionar mais uma comida? (sim/não)").toLowerCase();
  }

  // Exibe a lista de compras organizada
  exibirListaDeCompras();
}

// Inicia o processo
adicionarItem();
