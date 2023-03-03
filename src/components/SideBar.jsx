import React from 'react'
import styled from 'styled-components';
import {NavLink, Outlet } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
        <MenuContainer>
                <Logo>LOGO</Logo>
                <Nav>
                  <NavLink 
                  style={({isActive}) => ({
                    color: isActive ? 'white' : '',
                    background: isActive ? "violet": ''
                })}
                  to='/courses/materials'><P>Courses</P></NavLink>
                  <NavLink
                    style={({isActive}) => ({
                        color: isActive ? 'white' : '',
                        background: isActive ? "violet": ''
                    })}
                   to='/anouncements'><P>Anouncements</P></NavLink>
                  <NavLink
                   style={({isActive}) => ({
                    color: isActive ? 'white' : '',
                    background: isActive ? "violet": ''
                })}
                    to='/notifications'><P>Notifications</P></NavLink>
                  <NavLink 
                  style={({isActive}) => ({
                    color: isActive ? 'white' : '',
                    background: isActive ? "violet": ''
                })}
                  to='/schedule'><P>Schedule</P></NavLink>
                </Nav>   
            </MenuContainer>
    </div>
  )
}

export default SideBar;

const MenuContainer = styled.div`
width: 200Px;
height: 370Px;
background-color: #c6b8b8;

`

const Logo = styled.h1`
background-color: #67d48d;
height: 70Px;
text-align: center;
Padding-toP: 15Px;
`

const Nav = styled.div`
margin-toP: 40Px;
font-size: 30Px;
`
const P = styled.p`
:active {
  background-color: violet;
}
cursor: Pointer;
`