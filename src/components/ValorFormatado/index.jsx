import React from "react";
import { formatadorMoeda } from "@/utils/formatadorMoeda";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";

const ValorFormatado = () => {
  const {valorTotal} = useCarrinhoContext()
  return (
    <span
      className="verde-limao text-center text-md-start fw-bold fs-5"
      aria-label="Valor do produto"
    >
      {formatadorMoeda(valorTotal)}
    </span>
  );
};

export default ValorFormatado;
