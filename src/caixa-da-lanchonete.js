class CaixaDaLanchonete {

    
    calcularValorDaCompra(formaDePagamento, itens) {
      const cardapio = {
        cafe: { descricao: 'Café', valor: 3.00 },
        chantily: { descricao: 'Chantily (extra do Café)', valor: 1.50 },
        suco: { descricao: 'Suco Natural', valor: 6.20 },
        sanduiche: { descricao: 'Sanduíche', valor: 6.50 },
        queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
        salgado: { descricao: 'Salgado', valor: 7.25 },
        combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
        combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.50 },
      };
    
      const formasDePagamento = ['dinheiro', 'debito', 'credito'];
    
      if (!formasDePagamento.includes(formaDePagamento)) {
        return 'Forma de pagamento inválida!';
      }
    
      if (itens.length === 0) {
        return 'Não há itens no carrinho de compra!';
      }
    
      let valorTotal = 0;
    
      for (let i = 0; i < itens.length; i++) {
        const [codigo, quantidade] = itens[i].split(',');
    
    if (!cardapio[codigo]) {
          return 'Item inválido!';
        }
    
        const item = cardapio[codigo];
    
        if (codigo.includes('extra')) {
          const itemPrincipal = codigo.split('extra')[0];
    
          if (!itens.includes(itemPrincipal)) {
            return 'Item extra não pode ser pedido sem o principal';
          }
        }
    
        valorTotal += item.valor * quantidade;
      }
    
      if (formaDePagamento === 'dinheiro') {
        valorTotal *= 0.95; // Aplica o desconto de 5% para pagamento em dinheiro
      } else if (formaDePagamento === 'credito') {
        valorTotal *= 1.03; // Aplica o acréscimo de 3% para pagamento a crédito
      }
    
      return `R$ ${valorTotal.toFixed(2)}`.replace('.',',')
    }
  
  
  }
  
  export { CaixaDaLanchonete };
  