import React from "react";
import { FiltrosContainer } from "./styles";

function Filtros(props) {
  return (
    <FiltrosContainer>
      <h2>Filtros</h2>

      <label htmlFor="pesquisa">Buscar por nome</label>
      <input
        id="pesquisa"
        placeholder="Digite o nome"
        value={props.query}
        onChange={(event) => {
          props.setQuery(event.target.value);
        }}
      />
      <label htmlFor="valor-minimo">Valor Mínimo</label>
      <input
        id="valor-minimo"
        placeholder="Digite o preço mínimo"
        type="number"
        value={props.minPrice}
        onChange={(event) => {
          props.setMinPrice(event.target.value);
        }}
      />
      <label htmlFor="valor-maximo">Valor Máximo</label>
      <input
        id="valor-maximo"
        placeholder="Digite o preço máximo"
        type="number"
        value={props.maxPrice}
        onChange={(event) => {
          props.setMaxPrice(event.target.value);
        }}
      />
    </FiltrosContainer>
  );
}

export default Filtros;
