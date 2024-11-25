import React from "react";
import ItemCarrinhoSuspenso from "@/components/CarrinhoSuspenso/ItemCarrinhoSuspenso";
import ItemCarrinho from "@/components/ItemCarrinho";
import { useLocation } from "react-router-dom";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";

const ListaProdutosCarrinho = () => {
  const location = useLocation();
  const {carrinho, quantidade} = useCarrinhoContext();
  return (
    <ul className="list-unstyled">
      {quantidade === 0 ? (
        <p className="text-center my-5">Não há produtos no carrinho</p>
      ) : (
        carrinho.map((itemCarrinho) => {
          return location.pathname === "/carrinho" ? (
            <ItemCarrinho
              key={itemCarrinho.id}
              itemCarrinho={itemCarrinho}
            />
          ) : (
            <ItemCarrinhoSuspenso
              key={itemCarrinho.id}
              itemCarrinho={itemCarrinho}
            />
          );
        })
      )}
    </ul>
  );
};

export default ListaProdutosCarrinho;