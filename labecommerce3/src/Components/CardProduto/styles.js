import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 370px;
  justify-content: center;
  background-color: #e6e6e6;
  box-shadow: 4px 4px #090d1f;
  font-size: 15px;
  text-align: center;

  img {
    width: 220px;
    height: 220px;
    margin: 0 auto;
  }
`;
export const TextoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 0 16px;
    padding: 10px;
  }
  button {
    margin: 10px;
    align-self: center;
    width: 70%;
    background-color: #c7c7c7;
    cursor: pointer;
    /* background-color: #090d1f;
    color: white; */
  }
`;
