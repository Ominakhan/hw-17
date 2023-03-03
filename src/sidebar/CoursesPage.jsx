import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import MainProducts from '../pages/MainProducts'

const CoursesPage = () => {
  return (
    <div>
        <Header/>
        <Outlet />
    </div>
  )
}

export default CoursesPage