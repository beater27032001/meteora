import React from "react";
import { useCarrinhoContext } from "../../../hooks/useCarrinhoContext";

const InfoItemCarrinho = () => {
  const{carrinho} = useCarrinhoContext()
  return (
    <div className="mx-4 mx-md-2 text-center text-md-start descricao">
      <p className="fw-semibold fs-4">{carrinho.titulo}</p>
      <p className="m-0">{carrinho.descricao}</p>
    </div>
  );
};

export default InfoItemCarrinho;
