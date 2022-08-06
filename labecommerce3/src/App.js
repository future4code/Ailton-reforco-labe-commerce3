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
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [carrinho, setCarrinho] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  const addCart = (obj) => {
    setCarrinho([obj, ...carrinho]);
    console.log(carrinho);
  };

  // const [minPrice, setMinPrice] = useState(-Infinity);
  // const [maxPrice, setMaxPrice] = useState(Infinity);

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
        <Produtos
          query={query}
          setQuery={setQuery}
          minPrice={minPrice}
          MinPrice={setMinPrice}
          maxPrice={maxPrice}
          MaxPrice={setMaxPrice}
          addCart={addCart}
        />
        <Carrinho itensCarrinho={carrinho} />
      </PageContainer>
    </>
  );
}

export default App;
