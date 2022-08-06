import React, { useState } from "react";
import { Card, TextoCard } from "./styles";

function CardProduto({ obj, carrinho, setCarrinho }) {
  const addCart = (obj) => {
    setCarrinho([obj, ...carrinho]);
    console.log(carrinho);
  };

  return (
    <Card>
      <img src={obj.imageUrl} />
      <TextoCard>
        <p>{obj.nome}</p>
        <p>R$:{obj.price}</p>
        <button
          onClick={() => {
            addCart(obj);
          }}
        >
          Adicionar ao carrinho
        </button>
      </TextoCard>
    </Card>
  );
}

export default CardProduto;
