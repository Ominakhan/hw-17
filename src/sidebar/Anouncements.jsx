import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Anouncements = () => {
  const navigate = useNavigate()
  return (
    <div>
      <P>Anouncements Page</P>
      <Button onClick={()=>navigate("/courses/students")}>Go to Students page</Button>
    </div>
  )
}

export default Anouncements

const P = styled.div`
    padding: 30px;
    font-size: 30px;
`
const Button = styled.button`
    margin: 30px;
    font-size: 20px;
    border-radius: 30px;
    width: 250px;
    height: 40px;
    background-color: #1a951a
`
