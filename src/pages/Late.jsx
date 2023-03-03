import React from 'react'
import styled from 'styled-components'

const Late = () => {
  return (
    <ContainerLate>
       <P>Late Page</P>
    </ContainerLate>
  )
}

export default Late

const ContainerLate = styled.div`
  margin-left: 30px;
  width: 640px;
  background-color: #76b4d6;
  height: 60px;
`
const P = styled.p`
  margin-left: 200px;
  font-size: 30px;
  padding-top: 10px;
`
