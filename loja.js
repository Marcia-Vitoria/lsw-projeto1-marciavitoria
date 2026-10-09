// 1. DADOS
// Tarefa 1 - Dados da loja (cafeteria condado)

const nomeLoja = " Cafeteria Condado";

const produtos = [
    { nome: "Café com leite", categoria: "cafés", preco: 10, quantidade: 15, vendidos: 6 },
    { nome: "Capuccino", categoria: "cafés", preco: 18, quantidade: 2, vendidos: 1 },
    { nome: "Café romano", categoria: "cafés", preco: 25, quantidade: 4, vendidos: 3 },
    { nome: "Suco de laranja", categoria: "sucos", preco: 5, quantidade: 12, vendidos: 7 },
    { nome: "Milkshake", categoria: "sucos", preco: 15, quantidade: 12, vendidos: 9 },
    { nome: "Chá de canela", categoria: "chás", preco: 10, quantidade: 3, vendidos: 2 }
];


// 2. FUNÇÕES
// Tarefa 2 - Listar os produtos
function listarProdutos(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(`${i + 1}. ${lista[i].nome} | ${lista[i].categoria} | R$ ${lista[i].preco} | ${lista[i].quantidade} un. | ${lista[i].vendidos} vendidos`);
    }
};

// Tarefa 3 - Cadastrar um produto
function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
    const produto = {
        nome: formatarNome(nome),
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0
    };

    lista.push(produto);
    return lista.length;
};

// Tarefa 4 - Valor do estoque
function calcularValorEstoque(lista) {
    let valorTotal = 0;

    for (let i = 0; i < lista.length; i++) {
        valorTotal = valorTotal + lista[i].preco * lista[i].quantidade;
    }
    return valorTotal;
};

// Tarefa 5 - Buscar um produto
function buscarProduto(lista, termo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nome.toLowerCase().includes(termo.toLowerCase())) {
            return lista[i];
        }
    }
    return null;
};

// Tarefa 6 - Produtos em falta
function produtosEmFalta(lista, minimo) {
    const produtosFaltando = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].quantidade < minimo) {
            produtosFaltando.push(lista[i]);
        }
    }
    return produtosFaltando;
};

// Tarefa 7 - Aplicar desconto
function aplicarDesconto(lista, categoria, percentual) {
    let contador = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].categoria === categoria) {
            lista[i].preco = lista[i].preco - (lista[i].preco * percentual / 100);
            contador++;
        }
    }
    return contador;
};

// Tarefa 8 - Registrar uma venda
function registrarVenda(lista, nome, quantidade) {
    const produto = buscarProduto(lista, nome);

    if (produto === null || produto.quantidade < quantidade || quantidade <= 0) {
        return false;
    }

    produto.quantidade = produto.quantidade - quantidade;
    produto.vendidos = produto.vendidos + quantidade;

    return true;
};

// Tarefa 9 - Padronizar nomes
function formatarNome(texto) {
    texto = texto.trim();

    if (texto.length === 0) {
        return texto;
    }

    return texto[0].toUpperCase() + texto.slice(1).toLowerCase();
};

// Tarefa 10 - Salvar e recuperar em JSON
function converterParaJSON(lista) {
    return JSON.stringify(lista);
};

function lerJSON(texto) {
    return JSON.parse(texto);
};

// Tarefa 11 - Relatório final
function gerarRelatorio(nome, lista) {
    const valorEstoque = calcularValorEstoque(lista);
    const produtosFaltando = produtosEmFalta(lista, 5);

    console.log(`---- RELATÓRIO: ${nome.toUpperCase()} ----`);
    console.log(`Produtos cadastrados: ${lista.length}`);
    console.log(`Valor total em estoque: R$ ${Number(valorEstoque.toFixed(2))}`);
    console.log(`Produtos com estoque baixo: ${produtosFaltando.length}`);

    for (let i = 0; i < produtosFaltando.length; i++) {
        console.log(`- ${produtosFaltando[i].nome} (${produtosFaltando[i].quantidade} un.)`);
    }
};


// 3. PROGRAMA PRINCIPAL
// tarefa 2
console.log("Tarefa 2: listar");
listarProdutos(produtos);

// tarefa 3 
console.log("Tarefa 3: cadastrar");
const quantidadeProdutos = cadastrarProduto(produtos, "suco de abacaxi", "sucos", 7, 9);
console.log(`Produto cadastrado! Agora a loja tem ${quantidadeProdutos} produtos.`);

// tarefa 4
console.log("Tarefa 4: valor do estoque");
console.log(`Valor do estoque: R$ ${Number(calcularValorEstoque(produtos).toFixed(2))}`);

// tarefa 5
console.log("Tarefa 5: buscar");
const produtoEncontrado = buscarProduto(produtos, "MILKSHAKE");

if (produtoEncontrado !== null) {
    console.log(`Encontrado: ${produtoEncontrado.nome} - R$ ${produtoEncontrado.preco}`);
} else {
    console.log("Produto não encontrado.");
}

const produtoInexistente = buscarProduto(produtos, "Bolo");

if (produtoInexistente === null) {
    console.log("Produto não encontrado.");
}

// tarefa 6
console.log("Tarefa 6: em falta");
const produtosFaltando = produtosEmFalta(produtos, 5);
console.log(`Produtos com menos de 5 unidades: ${produtosFaltando.length}`);

// tarefa 7
console.log("Tarefa 7: desconto");
const quantidadeDescontos = aplicarDesconto(produtos, "cafés", 10);
console.log(`${quantidadeDescontos} produtos receberam desconto.`);

const cafe = buscarProduto(produtos, "Café com leite");
console.log(`Novo preço do café com leite: R$ ${Number(cafe.preco.toFixed(2))}`);

// tarefa 8
console.log("Tarefa 8: registrar venda");

if (registrarVenda(produtos, "Café com leite", 3)) {
    const cafeVendido = buscarProduto(produtos, "Café com leite");
    console.log(`Venda realizada! ${cafeVendido.nome}: ${cafeVendido.quantidade} un. em estoque, ${cafeVendido.vendidos} vendidos.`);
}

if (!registrarVenda(produtos, "Capuccino", 10)) {
    console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
}

// tarefa 9
console.log("Tarefa 9: formatar nome");
console.log(formatarNome("   cAFÉ gelado  "));

// tarefa 10
console.log("Tarefa 10: JSON");
const textoJSON = converterParaJSON(produtos);
console.log(typeof textoJSON);

const produtosRecuperados = lerJSON(textoJSON);
console.log(`Itens recuperados: ${produtosRecuperados.length} | Primeiro: ${produtosRecuperados[0].nome}`);

// tarefa 11
console.log("Tarefa 11: relatório");
gerarRelatorio(nomeLoja, produtos);