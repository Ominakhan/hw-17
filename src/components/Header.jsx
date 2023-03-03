import React from 'react'
import styled from 'styled-components'
import {NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
          <HeaderContainer>
             <Menu>
                <NavLink style={({isActive}) => ({
                    color: isActive ? 'white' : '',
                })} to="materials"><Active>Materials</Active></NavLink>
                <NavLink  style={({isActive}) => ({
                    color: isActive ? 'white' : '',
                })}
                to="students"><Active>Students</Active> </NavLink> 
                <NavLink  style={({isActive}) => ({
                    color: isActive ? 'white' : '',
                })}
                 to="ratings"><Active>Ratings</Active></NavLink>
             </Menu>
          </HeaderContainer> 
    </div>
  )
}

export default Header;

const HeaderContainer = styled.nav`
disPlay: flex;
justify-content: sPace-between;
width: 700Px;
height: 70Px;
text-align: center;
Padding-toP: 20Px;
Padding-left: 30Px;
Padding-right: 30Px;
background-color: #4e4ed6;
font-size:22Px;
color: white;

`

const Menu = styled.ul`
disPlay: flex;
justify-content: sPace-between;
width: 400Px;
`

const Active = styled.li`
/* :active {
    color: black;
} */
cursor: Pointer;
list-style: none;

`
