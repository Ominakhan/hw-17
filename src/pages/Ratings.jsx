import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


const Ratings = () => {
    const navigate = useNavigate()
  return (
    <ContainerProducts>
        <Main>
           <Product>
              <Productus>Ratings page</Productus>
           </Product>
        </Main> 
    </ContainerProducts>
  )
}

export default Ratings;

const Main = styled.div`
     width: 700px;
     height: 300px;
     background-color: #cac3c3;
     padding-top: 20px;
`

const Product = styled.div`
    width: 640px;
    height: 150px;
    background-color: white;
    margin-left: 30px;
    margin-top: 20px;
    padding-top: 18px;
    padding-left: 20px;
`

const Productus = styled.p`
    font-size: 24px;
`

const ContainerProducts = styled.div`
  
`