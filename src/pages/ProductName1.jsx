import React from 'react'
import styled from 'styled-components'
import { Outlet,useParams, NavLink } from 'react-router-dom';




const ProductName1 = () => {
    const {detail} = useParams()
  return (
        <Main>
           <Product>
              <Productus>Material Details Page</Productus>
                <Productus>material {detail}</Productus>
           </Product>
           <div>
            <ContainerMenuMaterials>
                <NavLink to={"submitted"}> <MenuMaterials>Submitted</MenuMaterials></NavLink>
                <NavLink to={"waiting"}> <MenuMaterials>Waiting</MenuMaterials></NavLink>
                <NavLink to={"late"}> <MenuMaterials>Late</MenuMaterials></NavLink>
            </ContainerMenuMaterials>
           </div>
           <Outlet/>
        </Main> 
  )
}

export default ProductName1;


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

const ContainerMenuMaterials = styled.ul`
    list-style: none;
    display: flex;
    width: 640px;
    height: 50px;
    background-color: green;
    justify-content: space-between;
    margin-left: 30px;
`

const MenuMaterials = styled.li`
    margin-left: 20px;
    margin-right: 20px;
    font-size: 24px;
    color: white;
`

