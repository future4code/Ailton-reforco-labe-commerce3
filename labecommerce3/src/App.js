import "./App.css";
import { Produtos } from "./components/Produtos/Produtos";
import { GlobalStyle } from "./GlobalStyle";
import { PageContainer } from "./styles.js";
import { HeaderPage } from "./styles.js";
import Filtros from "./components/Filtros/Filtros";
import { useState } from "react";
import CardProduto from "./components/CardProduto/CardProduto";
import Carrinho from "./components/Carrinho/Carrinho";

function App() {
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState(-Infinity);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  // adgfsg

  // dsabb
  return (
    <>
      <GlobalStyle />
      <HeaderPage>
        <img
          src={
            "https://uploaddeimagens.com.br/images/003/907/269/full/astro.png?1655503802"
          }
        ></img>
        <h1>Labe-commerce</h1>
      </HeaderPage>
      <PageContainer>
        <Filtros
          query={query}
          setQuery={setQuery}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
        <Produtos />
        <Carrinho />
      </PageContainer>
    </>
  );
}

export default App;
