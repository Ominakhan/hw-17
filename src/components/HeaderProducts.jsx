import React from 'react'
import styled from "styled-components";
import {NavLink,useNavigate } from 'react-router-dom';


const HeaderProducts = () => {

     const navigate = useNavigate()
    return (
      <ContainerProducts>
          <Header>
             <div>LOGO</div> 
             <Menu>
                <NavLink style={({isActive}) => ({
                    color: isActive ? 'white' : '',
                })} to="/mainproducts"><Active>Products</Active></NavLink>
                <NavLink  style={({isActive}) => ({
                    color: isActive ? 'white' : '',
                })}
                to="/mycart"><Active>My Cart</Active> </NavLink> 
                <NavLink  style={({isActive}) => ({
                    color: isActive ? 'white' : '',
                })}
                 to="/myorders"><Active>My Orders</Active></NavLink>
             </Menu>
          </Header> 
          
      </ContainerProducts>
    )
  }
  
  export default HeaderProducts;
  
  const Header = styled.nav`
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
  
  const Menu = styled.ul`
      display: flex;
      justify-content: space-between;
      width: 400px;
  `
  
 
  
  const ContainerProducts = styled.div`
      margin-left: 500px;
  `
  
  const Active = styled.li`
      :active {
          color: black;
      }
      cursor: pointer;
      list-style: none;
  
  `