import React, { useState } from 'react'
import styled from 'styled-components'



const Card = styled.div `
border: 1px solid black;
display: flex;
flex-direction: column;
width: 150px;
height: 400px;
`
const TextoCard =  styled.div`
display: flex;
flex-direction: column;
p{  margin: 0 16px;
    padding: 10px;}
button{
    margin: 10px;
    align-self: center;
    width: 70%;}
`




 function CardProduto({obj, carrinho, setCarrinho}) {

  

    const addCart = (obj) => {
            setCarrinho([obj, ...carrinho])
            console.log(carrinho)
    }

  return (
  
    <Card>
        <img src={obj.imageUrl}/>
        <TextoCard>
            <p>{obj.nome}</p>
            <p>R$ {obj.price}</p>
            <button onClick={()=> {addCart(obj)}}>Adcionar no carrinho</button>
        </TextoCard>

    </Card>
  )
}

export default CardProduto;
