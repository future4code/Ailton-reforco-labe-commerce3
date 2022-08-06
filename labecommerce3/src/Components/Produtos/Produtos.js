import React, { useState } from "react";
import CardProduto from "../CardProduto/CardProduto";
import { Header } from "./styles";
import { GrupoCard } from "./styles";
import { ProdutosContainer } from "./styles";

export function Produtos(props) {
  // const Ordenados = produtos && produtos.sort((a,b) => {
  //     if (this.state.ordenando === "Crescente") {
  //         return a.price - b.price
  //     } else {
  //         return b.price - a.price
  //     }
  // })

  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Foguete da Missão Apollo 11",
      price: 300999,
      imageUrl:
        "https://s2.glbimg.com/hAGoO-8YNcaJ19yrUwcp-C-7gXc=/e.glbimg.com/og/ed/f/original/2019/07/16/4.jpg",
    },
    {
      id: 2,
      nome: "Nave Escalibul 388",
      price: 400899,
      imageUrl:
        "https://services.meteored.com/img/article/spacedream-argentina-naves-cruceros-espaciales-turismo-espacial-spacex-elon-musk-1645029018049_768.jpg",
    },
    {
      id: 3,
      nome: "Ônibus Espacial A3564",
      price: 940300,
      imageUrl:
        "https://www.inovacaotecnologica.com.br/noticias/imagens/020175100118-onibus-espacial.jpg",
    },
    {
      id: 4,
      nome: "Conjunto Viagem Espacial com Oku Baby",
      price: 500,
      imageUrl:
        "https://ae01.alicdn.com/kf/Hc89f50fb5c6341128eca72a930e0238f8/Quebra-cabe-as-2021-brinquedos-ticos-modelo-de-espa-o-lan-adeira-esta-o-espacial-s.jpg_Q90.jpg_.webp",
    },
    {
      id: 5,
      nome: "Pelucias Estronalticas Kids Lunatics",
      price: 1500,
      imageUrl:
        "https://ae01.alicdn.com/kf/Hc9b34e5ddccc456eb69c7404cff01e00u/Brinquedo-de-pel-cia-astronauta-e-nave-espacial-recheado-macio-tipo-fic-o-cient-fica-boneca.jpg_Q90.jpg_.webp",
    },
    {
      id: 6,
      nome: "Asteroide precioso de Plutão 380k",
      price: 30900,
      imageUrl:
        "http://s3-sa-east-1.amazonaws.com/mundogum/wp-content/uploads/2014/09/5cdc5503f2823ab9fb38b6c3812e200d.jpg",
    },
    {
      id: 7,
      nome: "Meteoro Lunar com chuvas ateróicas",
      price: 12500,
      imageUrl:
        "https://i.pinimg.com/236x/78/6c/ff/786cffb9e0a4ddafde7b520dd45b2409--rocks-and-minerals-cobalt.jpg",
    },
    {
      id: 8,
      nome: "Meteoro em eclosão em base de mágma pulada",
      price: 15800,
      imageUrl:
        "https://i.pinimg.com/736x/0f/39/60/0f3960b49e85b68572f5224b55752fd1--beautiful-rocks-gem-stones.jpg",
    },
    {
      id: 9,
      nome: "Viagem interespacial Terra para Lua",
      price: 50500,
      imageUrl:
        "https://tm.ibxk.com.br/2021/07/14/14195621703468.jpg?ims=1200x675",
    },
    {
      id: 10,
      nome: "Passeio interestrelar Vialactia 1009",
      price: 20400,
      imageUrl:
        "https://gooutside.com.br/wp-content/uploads/sites/3/2020/06/empresa-desenvolve-balao-para-fazer-turismo-espacial.png",
    },
    {
      id: 11,
      nome: "Viagem multiplanetária Terra, Lua , Vênus e Marte ",
      price: 150000,
      imageUrl:
        "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=MjZlKGl7tZo4kd74Z+b+t+uFIyu7Hou2XFkEaDGiOt0+t28vxVzxGvksKkvBLqGN/DYbZUkYx+iwnbyNcTC6vf5V+Bfrg+0SJT8SN4s3qgUt65Q=",
    },
    {
      id: 12,
      nome: 'Camisa "Turma dos Lunaticos"',
      price: 200,
      imageUrl:
        "https://ae01.alicdn.com/kf/Hefadd21ca0c04b8d958b31e4891a5c97W/Camiseta-com-estampa-de-lua-e-terra-camiseta-masculina-do-espa-o-x-codificador-espa-oso.jpg_Q90.jpg_.webp",
    },
    {
      id: 13,
      nome: 'Camisa "Puzzle Galaxy"',
      price: 150,
      imageUrl:
        "https://m.media-amazon.com/images/I/61Y4N9loCwL._AC_SX385_.jpg",
    },
    {
      id: 14,
      nome: 'Camisa "Occupy Mars"',
      price: 250,
      imageUrl:
        "https://www.ofertaviva.com.br/photo/camiseta-masculina-de-espaco-x-camiseta-com-estampa-casual-100-algodao-tesla-para-homens.jpg",
    },
    {
      id: 15,
      nome: "Camisa Planetas",
      price: 250,
      imageUrl:
        "https://img.elo7.com.br/product/zoom/316BC1C/camiseta-planetas-espaco-cosmos-camisa-estampada-full-print-cosmos.jpg",
    },
    {
      id: 16,
      nome: "Trage Espacial Orange Nasa WZ300",
      price: 10500,
      imageUrl:
        "https://qph.fs.quoracdn.net/main-qimg-190b248dabcd6d7403dc8ab0dffec6cf-pjlq",
    },
    {
      id: 17,
      nome: "Trage Lunático EF240 Edward Mark",
      price: 15800,
      imageUrl:
        "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/04/107198735873800.jpg",
    },
    {
      id: 18,
      nome: "Trage multiplanetário EW3400 Nasa Revolution",
      price: 30100,
      imageUrl:
        "https://mundoconectado.com.br/uploads/2021/01/04/16843/traje-spacex.jpg",
    },
    {
      id: 19,
      nome: "Satélite Elio Mark BH3450 1980",
      price: 20500,
      imageUrl:
        "https://qph.fs.quoracdn.net/main-qimg-9e1c9012b7dbcafa67438cd414201d10-lq",
    },
    {
      id: 20,
      nome: "Satélite Strukze Britril 4590 1950",
      price: 18400,
      imageUrl:
        "https://super.abril.com.br/wp-content/uploads/2021/11/Teste-de-missil-russo-explode-satelite.jpg",
    },
    {
      id: 21,
      nome: "Viaturas espaciais Nasa VXW320",
      price: 2999,
      imageUrl:
        "https://ae01.alicdn.com/kf/He86fa8fd2f8b4dea9fd15ff6044c9793R/Brinquedo-de-blocos-de-constru-o-modelo-lua-avi-o-espa-onave-espacial-tijolos-de-constru.jpg_Q90.jpg_.webp",
    },
  ]);
  const [orderParam, setOrderParam] = useState("asc");

  const [carrinho, setCarrinho] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  const handleInputOrdenacao = (event) => {
    setOrderParam(event.target.value);
  };

  const produtosMap =
    produtos &&
    produtos
      .filter((produto) => {
        return produto.nome.toLowerCase().includes(props.query.toLowerCase());
      })
      .filter((produto) => {
        return produto.price >= props.minPrice || props.minPrice === "";
      })
      .filter((produto) => {
        return produto.price <= props.maxPrice || props.maxPrice === "";
      })

      .sort((a, b) =>
        orderParam === "" || (orderParam === "asc" && a.nome > b.nome) ? 1 : -1
      )
      .sort((a, b) =>
        orderParam === "" || (orderParam === "desc" && a.nome > b.nome) ? -1 : 1
      )

      .map((produto) => {
        return (
          <CardProduto
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            obj={produto}
            key={produto.id}
            addCart={props.addCart}
          />
        );
      });
  return (
    <ProdutosContainer>
      <Header>
        <p>Quantidade de produtos: {produtos.length}</p>
        <div className="ordenacao">
          <p>
            Ordenação: <> </>
          </p>
          <select
            name=""
            id=""
            value={orderParam}
            onChange={handleInputOrdenacao}
          >
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
          </select>
        </div>
      </Header>
      <GrupoCard>{produtosMap}</GrupoCard>
    </ProdutosContainer>
  );
}
