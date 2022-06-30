let Produto = function (nomeProduto, valorProduto, qualidadeProduto, statusProduto) {
    this.nomeDoProduto = nomeProduto
    this.valorDoProduto = valorProduto
    this.qualidadeDoProduto = qualidadeProduto
    this.statusDoProduto = statusProduto
};



const produtos = [];

produtos.push(new Produto("Foice Gelada do Senhor Ahune", 465, 55, true));
produtos.push(new Produto("Martelete da Primeira Juíza", 798, 80, true));
produtos.push(new Produto("Foice do Descriador", 1200, 100, true));
produtos.push(new Produto("Guilhotina de Varruth", 1400, 80, false));
produtos.push(new Produto("Sabre Singular de Xy'rath", 900, 55, false));

// ----------------------------------------------------------------------------------------------------------------- //

const carrinho = {

    produtos: produtos,
    valor: function (inicio, fim) {
        this.produtos = this.produtos.filter(function (item) {
            return item.valorDoProduto >= inicio && item.valorDoProduto <= fim;
        });
    },
    qualidade: function (valor) {                                           
        this.produtos = this.produtos.filter(function (item) {
            return item.qualidadeDoProduto >= valor;                        // durante todas essas funções, foram feiras callbacks.
        });
    },
    sttsProd: function () {
        this.produtos = this.produtos.filter(item => item.statusDoProduto == true);   // ArrowFunction.
    }
};  // no fim desse objeto, as funções irão repopular o filtro Produtos, fazendo com que o console.log, impram os produtos que se encaixam no filtro.


carrinho.valor(487, 1600);

carrinho.qualidade(70);                          // De preferencia, para fazer a execução das 3 propriedades funções no objeto Carrinho foi populado os valores separadamente, pra depois ser chamado no console.log e filtrado.
                     
carrinho.sttsProd();

console.log(carrinho.produtos)