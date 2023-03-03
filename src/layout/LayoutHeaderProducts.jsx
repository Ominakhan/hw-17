import React from 'react'
import styled from "styled-components";
import {NavLink, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';


const LayoutHeaderProducts = () => {
    return (
        <Container>
            <SideBar/>
            <Outlet/>
        </Container>
    )
  }
  
  export default LayoutHeaderProducts;
  
  const  Container = styled.div`
  disPlay: flex;
  `