import { CarrinhoContainer } from "./styles";
import { ImgProduto } from "./styles";
import { ImgDeleteProduto } from "./styles";

const Carrinho = (props) => {
  const ItensCarrinhos = props.itensCarrinho.map((produto) => {
    return (
      <li>
        <div className="img-name">
          <ImgProduto src={produto.imageUrl} />
          <p>{produto.nome}</p>
        </div>
        <div className="valor-remover">
          <span>Valor: R${produto.price}</span>
          <ImgDeleteProduto
            src="https://cdn-icons-png.flaticon.com/512/4379/4379607.png"
            onClick={() => alert(produto.id)}
          />
        </div>
      </li>
    );
  });
  return (
    <div>
      <CarrinhoContainer>
        <h2>Carrinho</h2>
        <p>Valor total: R$0</p>
        <ul>{ItensCarrinhos}</ul>
      </CarrinhoContainer>
    </div>
  );
};

export default Carrinho;
