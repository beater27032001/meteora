import React from "react";
import Botao from "@/components/Botao";
import Quantidade from "@/components/Quantidade";
import ValorFormatado from "@/components/ValorFormatado";
import InfoItemCarrinho from "./InfoItemCarrinho";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";

const ItemCarrinho = () => {

  const {adicionarProduto, removerProduto, removerProdutoCarrinho, carrinho} = useCarrinhoContext()

  return (
    <li key={carrinho.id}>
      <>
        <div className="produto">
          <img
            className="imagem__produto"
            src={carrinho.src}
            alt={carrinho.alt}
          />
          <InfoItemCarrinho itemCarrinho={carrinho} />
          <ValorFormatado valor={carrinho.preco} />
          <Quantidade
            itemCarrinho={carrinho}
            adicionarProduto={adicionarProduto}
            removerProduto={removerProduto}
          />
          <Botao
            variant="deleteItem"
            aria-label="Excluir"
            handleClick={() => removerProdutoCarrinho(carrinho.id)}
          >
            delete_forever
          </Botao>
        </div>
        <div className="divisor my-5" />
      </>
    </li>
  );
};

export default ItemCarrinho;
