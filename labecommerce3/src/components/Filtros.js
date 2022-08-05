import React from "react";

function Filtros (props) {
    return(
        <div>
         
         <input
            placeholder="pesquisa"
            value={props.query}
            onChange={(event) => {props.setQuery(event.target.value)}}/>
                 
                 
         <input
            placeholder="Preço mínimo"
            type="number"
            value={props.minPrice}
            onChange={(event) => {props.setMinPrice(event.target.value)}}/>

         <input
            placeholder="Preço máximo"
            type="number"
            value={props.maxPrice}
            onChange={(event) => {props.setMaxPrice(event.target.value)}}/>

        </div>
    )
}

export default Filtros;