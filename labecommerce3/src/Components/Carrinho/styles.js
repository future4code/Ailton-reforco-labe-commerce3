import styled from "styled-components";

export const CarrinhoContainer = styled.div`
  background-color: #43073c;
  width: 19vw;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 8px;

  h2 {
    font-size: 20px;
  }
  > p {
    font-size: 15px;
    margin-bottom: 15px;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 10%;
    list-style-type: none;
  }

  li {
    background-color: #090d1f;
    width: 90%;
    padding-block: 10px;
    margin-bottom: 15px;

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 5px;
    }
    .img-name {
      padding-bottom: 8px;
    }
  }
`;

export const ImgProduto = styled.img`
  width: 45px;
  border-radius: 10px;
`;

export const ImgDeleteProduto = styled.img`
  width: 30px;
  cursor: pointer;
`;
