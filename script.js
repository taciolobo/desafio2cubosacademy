//PRODUTO TESTE
let produtoTest1 = {
    id: '001',
    nome: 'Teste',
    quantidadeDisponivel: 10,
    valor: 100,
    deletado: false
};
//ESTOQUE TESTE
const estoqueTeste = [
{
    id: '001',
    nome: 'Sabão',
    quantidadeDisponivel: 10,
    valor: 100,
    deletado: false
},
{
    id: '002',
    nome: 'Agua Sanitária',
    quantidadeDisponivel: 20,
    valor: 50,
    deletado: false
},
{
    id: '003',
    nome: 'Pano de chão',
    quantidadeDisponivel: 30,
    valor: 150,
    deletado: true
}];

//TESTE PRODUTO PARA DELATAR
let produtoParaDeletarTeste = {
    id: '002',
    nome: 'Agua Sanitária',
    quantidadeDisponivel: 20,
    valor: 50,
    deletado: false
};

//TESTE PRODUTO PARA LISTAR
let produtoParaListarTeste = {
    id: '002',
    nome: 'Agua Sanitária',
    quantidadeDisponivel: 20,
    valor: 50,
    deletado: false
};

//FIM DOS CÓDIGOS DE TESTE --------------------------------


//ESTRUTURA DO NOVO PRODUTO
let novoProduto = {
    id: '',
    nome: '',
    quantidadeDisponivel: 0,
    valor: 0,
    deletado: false
};

//ESTRUTURA DO PRODUTO PARA DELETAR
let deletedProduct = {
    id: '',
    nome: '',
    quantidadeDisponivel: 0,
    valor: 0,
    deletado: false
};

//ESTRUTURA DO PRODUTO PARA LISTAR
let listedProduct = {
    id: '',
    nome: '',
    quantidadeDisponivel: 0,
    valor: 0,
    deletado: false
};


//CRIAR ESTOQUE
let estoque = [];



//VERIFICAR SE PRODUTO JÁ EXISTE
let produtoJaExiste = 0
const seJaExiste = (produto) => {
    if (novoProduto.id === produto.id) {
        console.log('Esse produto já existe');
        produtoJaExiste++ ;
    } else {
        console.log('Produto não identificado');
    }
};


//ADICONAR NOVO PRODUTO
const addNewProduct = (produto) => {
    estoque.forEach(seJaExiste);
    if (produtoJaExiste === 0) {
        estoque.push(novoProduto);
    } else {
        produtoJaExiste = 0
        console.log('Produto já existe. Utilize função de atualizar.')
    };
};

//LISTAR PRODUTOS DO ESTOQUE
const listingStorageProducts = (listedProduct) => {
    console.log(`ID do Produto: ${listedProduct.id}`);
    console.log(`Nome Produto: ${listedProduct.nome}`);
    console.log(`Quantidade Disponível: ${listedProduct.quantidadeDisponivel}`);
    console.log(`Valor em R$ (cents): ${listedProduct.valor}`);
    console.log(`Status Deletado: ${listedProduct.deletado}`);
    console.log(`---------------------`);
    console.log(` `);
};

const showMyStorage = () => {
    estoque.forEach(listingStorageProducts);
    console.log('---FIM DO ESTOQUE ---');
};

//DELETAR PRODUTO
const deletarProduto = (produto) => {
    if (deletedProduct.id === produto.id) {
        console.log(`Quero deletar ${deletedProduct.id} e encontrei ${produto.id}`);
        produto.deletado = true;
    } else {
        console.log((`Produto de ID ${produto.id}não encontrado`));
    };
};

const procurarParaDeletarProduto = () => {
    deletedProduct = deletedProduct; //ALTERAR PARA PRODUTO QUE PRECISAR SER DELETADO
    estoque.forEach(deletarProduto);
};


//OBTER INFORMAÇÕES DE UM PRODUTO
const acharProdutoParaListar = (produto) => {
    if (listedProduct.id === produto.id) {
        listingStorageProducts(produto);
    } else {
        console.log(`Produto de ID ${listedProduct.id} ainda não encontrado no estoque`)
    }
};

const mostrarProdutoEncontrado = () => {
    listedProduct = listedProduct;
    estoque.forEach(acharProdutoParaListar);
}


//ATUALIZAR INFORMAÇÕES DE UM PRODUTO



/*ESTRUTURA DO ESTOQUE
[]Reduzir quantidade de produtos
[]Atualizar produto
[]Produto deletado não pode ser atualizado
*/


//PEDIDO
const pedido = {
    id: '',
    produtos: [],
    estado: 'incompleto', //incompleto, processando, pago, enviado, entregue ou cancelado
    idCliente: '',
    deletado: '',
    valorTotal: ''
};
/*ESTRUTURA DO PEDIDO
[] Um pedido começa com o status incompleto. 
[]Não vender produto sem estoque disponível

[]Um pedido com status incompleto não pode ter seu estado alterado se sua lista de produtos estiver vazia
[]Um pedido marcado como deletado não pode aparecer na resposta da listagem de todos os pedidos para o usuário final
[]A lista de produtos não pode ser alterada depois que o estado do pedido deixou de ser incompleto. Produtos não podem ser adicionados nem removidos neste pedido.
[]Adicionar um novo produto na lista de pedidos.
[]Remover um produto da lista de produtos
[]Atualizar a quantidade de um produto já adicionado no pedido
[]Marcar um pedido como cancelado
[]Marcar um pedido como pago
[]Marcar um pedido como entregue
[]Marcar um pedido como processando
[]Marcar um pedido como deletado


*/

//HISTORICO DE PEDIDOS
const registroPedidos = [];

/*ESTRUTURA DO PEDIDO
[]  Listar todos os pedidos
[]  Listar apenas pedidos entregues
[]  Listar apenas pedidos pagos
[]  Listar apenas pedidos processando
[]  Listar apenas pedidos cancelados
[]  Listar apenas um pedido a partir de um id

*/
