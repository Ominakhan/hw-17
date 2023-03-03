import React from 'react'
import styled from 'styled-components'
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const ProductName = () => {
    const navigate=useNavigate()
    const params = useParams()
  return (
    <ContainerProducts>
        <Main>
           <Product>
              <Productus>Material Details page</Productus>
              <Productus>Material 2</Productus>
           </Product>
        </Main> 
        <Outlet/>
    </ContainerProducts>
  )
}

export default ProductName;


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
`

const Productus= styled.p`
    font-size: 24px;
`

const Back = styled.button`
    margin-left: -540px;
    margin-top: 20px;
    font-size: 18px;
    border-radius: 18px;
    width: 100px;
    height: 40px;
    background-color: #2f8386;
    color: white;
    margin-left: 30px;
    cursor: pointer;
    :active {
        background-color: green;
    }
`

const ContainerProducts = styled.div`
   
`
