import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 370px;
  justify-content: space-around;
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
    color: white;
    background-color: #090d1f;
    border-radius: 5px;
    padding: 2px;
  }
`;
