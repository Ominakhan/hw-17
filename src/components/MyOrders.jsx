import React from 'react'
import styled from 'styled-components'
import { BrowserRouter,createBrowserRouter,Link,Route,Router,Routes, useNavigate } from 'react-router-dom';


const MyOrders = () => {
    const navigate = useNavigate()
  return (
    <ContainerProducts>
        <Header>
           <div>LOGO</div> 
           <Menu>
               <Link to="/products"> <Active>Products</Active></Link>
               <Link to="/mycart"> <Active>My Cart</Active> </Link>
               <Link to="/myorders"><Active>My Orders</Active></Link>
           </Menu>
        </Header> 
        <Main>
           <Product>
              <Productus>My Orders Page bla bla bla</Productus>
              
           </Product>
           <Back onClick={()=>navigate("/products")}>Go Back</Back>
              
        </Main> 
    </ContainerProducts>
  )
}

export default MyOrders;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 700px;
    height: 70px;
    text-align: center;
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #4e4ed6;
    font-size:22px;
    color: white;

`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
`

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

const Productus = styled.p`
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
    cursor: pointer;
    :active {
        background-color: green;
    }
`

const ContainerProducts = styled.div`
    margin-left: 500px;
`

const Active = styled.div`
    :active {
        color: black;
    }
    cursor: pointer;

`