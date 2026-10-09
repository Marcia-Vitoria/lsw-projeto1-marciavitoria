# *Cafeteria Condado*

### Aluna: Márcia Vitória Abrantes Pinheiro

### Como executar:
1. Baixe o arquivo loja.js;
2. Abra o terminal na pasta onde ele foi salvo e execute o comando node loja.js.

OBS.: É necessário ter o Node.js instalado no computador.

### Funcionalidades:

##### Tarefa 1 — Dados da loja

Criei a constante nomeLoja, com o nome Cafeteria Condado, e um array chamado produtos, que armazena os produtos da loja. Cada produto é representado por um objeto JavaScript com cinco propriedades: nome, categoria, preco, quantidade e vendidos.

---

##### Tarefa 2 — Listar os produtos

`function listarProdutos(lista)`

Para listar os produtos, utilizei o laço de repetição for, que percorre o array até chegar à quantidade de elementos indicada por length. Em cada repetição, acessei as propriedades do produto para exibir suas informações em uma linha, com a numeração começando em 1.

---

##### Tarefa 3 — Cadastrar um produto

`function cadastrarProduto(lista, nome, categoria, preco, quantidade)`

Para cadastrar um novo produto, criei um objeto com os dados recebidos pelos parâmetros. Também reutilizei a função formatarNome para padronizar o nome antes de salvá-lo. A propriedade vendidos começa com o valor 0, pois o produto ainda não teve nenhuma venda registrada. Em seguida, utilizei o método push para adicionar o produto ao final do array e retornei a nova quantidade de produtos cadastrados.

---

##### Tarefa 4 — Valor do estoque

`function calcularValorEstoque(lista)`

Para calcular o valor total do estoque, utilizei uma variável acumuladora, iniciada em 0, e um laço de repetição para percorrer todos os produtos. A cada repetição, somei à variável o resultado da multiplicação do preço pela quantidade em estoque do produto. Ao final, retornei o valor total calculado.

---

##### Tarefa 5 — Buscar um produto

`function buscarProduto(lista, termo)`

Para buscar um produto, percorri o array com um laço for e comparei o termo pesquisado com o nome de cada produto. Utilizei os métodos toLowerCase e includes para permitir a busca sem diferenciar letras maiúsculas de minúsculas e também encontrar produtos pelo nome parcial. Quando encontro uma correspondência, retorno o produto. Caso nenhum produto corresponda à pesquisa, retorno null.

---

##### Tarefa 6 — Produtos em falta

`function produtosEmFalta(lista, minimo)`

Para identificar os produtos com poucas unidades em estoque, criei um novo array vazio e percorri a lista original. Utilizei uma condição if para verificar se a quantidade de cada produto era menor que o mínimo informado. Quando a condição é verdadeira, adiciono o produto ao novo array com push. Dessa forma, consigo retornar apenas os produtos em falta sem alterar a lista original.

---

##### Tarefa 7 — Aplicar desconto

`function aplicarDesconto(lista, categoria, percentual)`

Para aplicar descontos, percorri todos os produtos e verifiquei quais pertenciam à categoria informada. Quando encontro um produto da categoria escolhida, atualizo seu preço utilizando a fórmula de desconto indicada no enunciado. Também utilizei um contador para registrar quantos produtos tiveram seus preços alterados, retornando esse total ao final da função.

---

##### Tarefa 8 — Registrar uma venda

`function registrarVenda(lista, nome, quantidade)`

Para registrar uma venda, reutilizei a função buscarProduto, evitando precisar repetir a lógica de busca. Antes de realizar a venda, verifico se o produto existe e se há unidades suficientes em estoque. Também verifico se a quantidade solicitada é válida, ou seja, maior que zero. Se alguma dessas condições impedir a venda, retorno false. Caso contrário, diminuo a quantidade em estoque, aumento o total de unidades vendidas e retorno true para indicar que a operação foi realizada.

---

##### Tarefa 9 — Padronizar nomes

`function formatarNome(texto)`

Para padronizar os nomes dos produtos, utilizei o método trim para remover os espaços desnecessários no início e no final do texto. Depois, utilizei toUpperCase para deixar a primeira letra maiúscula e slice junto com toLowerCase para deixar o restante do texto em minúsculas. Também tratei o caso de uma string vazia para evitar erros ao acessar a primeira letra.

---

##### Tarefa 10 — Salvar e recuperar em JSON

`function converterParaJSON(lista)` e `function lerJSON(texto)`

Para converter os dados da loja em JSON, utilizei JSON.stringify, que transforma o array de produtos em um texto. Para recuperar os dados, utilizei JSON.parse, que converte esse texto novamente em um array de objetos. No teste, usei typeof para verificar o tipo do resultado da conversão e conferi quantos produtos foram recuperados e o nome do primeiro item.

---

##### Tarefa 11 — Relatório final

`function gerarRelatorio(nome, lista)`

Para gerar o relatório final, reutilizei as funções calcularValorEstoque e produtosEmFalta, aproveitando os cálculos já implementados nas tarefas anteriores. O relatório apresenta o nome da loja em letras maiúsculas, a quantidade de produtos cadastrados, o valor total do estoque e a quantidade de produtos com menos de cinco unidades. Por fim, utilizei um laço for para exibir o nome e a quantidade em estoque de cada produto identificado.
