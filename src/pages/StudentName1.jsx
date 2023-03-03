import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const StudentName1 = () => {
    const {studentsname1} = useParams()
  return (
    <Container>
        <P>Student Details page</P>
        <P>{studentsname1}</P>
    </Container>
  )
}

export default StudentName1

const Container = styled.div`
  width: 700px;
  height: 300px;
  background-color: #f2e9e9;

`
const P = styled.p`
   font-size: 30px;
   padding: 20px;
`