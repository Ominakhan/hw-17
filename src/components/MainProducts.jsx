import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import styled from 'styled-components'

const MainProducts = () => {
    const navigate = useNavigate()
  return (
    <ContainerProducts>
        <Main>
             <Product>
                <Span>Product Name 1</Span>
                <Link to="/mainproducts/:productname1"><Button>Details</Button></Link>
             </Product>
             <Product>
                <Span>Product Name 2</Span>
                <Link to="/mainproducts/:productname1"><Button>Details</Button></Link>
             </Product>
                <Back onClick={()=>navigate("/mainproducts")}>Go Back</Back>
          </Main> 
        </ContainerProducts>
  )
}

export default MainProducts;

const Main = styled.div`
width: 700px;
height: 300px;
background-color: #cac3c3;
padding-top: 20px;
`

const Product = styled.div`
width: 640px;
height: 70px;
background-color: white;
margin-left: 30px;
margin-top: 20px;
padding-top: 18px;
`

const Span = styled.span`
font-size: 24px;
`

const Button = styled.button`
margin-left: 360px;
font-size: 18px;
border-radius: 18px;
width: 100px;
height: 40px;
background-color: #2f8386;
color: white;
cursor: pointer;
:active {
   background-color: green;
}
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
cursor: pointer;
:active {
   background-color: green;
}
`
const ContainerProducts = styled.div`
    margin-left: 500px;
`