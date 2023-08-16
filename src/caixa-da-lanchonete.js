class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    const cardapio = {
      cafe: { descricao: "Café", valor: 3.0 },
      chantily: { descricao: "Chantily (extra do Café)", valor: 1.5 },
      suco: { descricao: "Suco Natural", valor: 6.2 },
      sanduiche: { descricao: "Sanduíche", valor: 6.5 },
      queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.0 },
      salgado: { descricao: "Salgado", valor: 7.25 },
      combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
      combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
    };

    const formasDePagamento = {
      dinheiro: { desconto: 0.05 },
      debito: { desconto: 0 },
      credito: { taxa: 0.03 },
    };

    const itensExtras = {
      chantily: "cafe",
      queijo: "sanduiche",
    };

    let valorTotal = 0;

    let quantidadeDeItens = {};

    for (let item of itens) {
      let [codigo, quantidade] = item.split(",");

      quantidade = parseInt(quantidade);

      if (quantidade <= 0) {
        return "Quantidade inválida!";
      }

      if (!cardapio[codigo]) {
        return "Item inválido!";
      }

      if (itensExtras[codigo]) {
        let temPrincipal = false;
        let principal = itensExtras[codigo];
        if (quantidadeDeItens[principal]) {
          temPrincipal = true;
        }
        if (!temPrincipal) {
          return "Item extra não pode ser pedido sem o principal";
        }
      }

      quantidadeDeItens[codigo] = (quantidadeDeItens[codigo] || 0) + quantidade;

      valorTotal += cardapio[codigo].valor * quantidade;
    }

    if (!formasDePagamento[metodoDePagamento]) {
      return "Forma de pagamento inválida!";
    }

    if (formasDePagamento[metodoDePagamento].desconto) {
      valorTotal -= valorTotal * formasDePagamento[metodoDePagamento].desconto;
    } else if (formasDePagamento[metodoDePagamento].taxa) {
      valorTotal += valorTotal * formasDePagamento[metodoDePagamento].taxa;
    }

    return `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
