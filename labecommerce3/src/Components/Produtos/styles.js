import styled from "styled-components";

export const ProdutosContainer = styled.div`
  width: 66vw;
  min-height: 100vh;
`;

export const Ordem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px;

  select {
    margin-top: 10px;
    height: 24px;
    width: 100px;
  }
  label {
    margin-left: 220px;
    margin-top: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  .ordenacao {
    display: flex;
    flex-direction: row;
  }
`;
export const GrupoCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
