import React from 'react'
import styled from 'styled-components'
import {useNavigate,Link, Outlet } from 'react-router-dom';

const Students = () => {
    const navigate = useNavigate()
  return (
    <ContainerProducts>
        <Main>
           <Product>
                <Span>Student Name 1 </Span>
                <Link to={"studentname1"}><Button>Details</Button></Link>
             </Product>
             <Product>
                <Span>Student Name 2</Span>
                <Link to={"studentname2"}><Button>Details</Button></Link>
             </Product>
        </Main>
    </ContainerProducts>
  )
}

export default Students;


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

const ContainerProducts = styled.div`
 
`

