import React from 'react'
import { useNavigate,Link, Outlet, useSearchParams, useParams} from 'react-router-dom'
import styled from 'styled-components'



const MainProducts = () => {
    const navigate = useNavigate()
    const params = useParams()

    console.log(params);

    const [searchParams, setSearchParams] = useSearchParams()
    
    const showModalhandler = () => {
      searchParams.set("showModal", true)
      setSearchParams(searchParams)
    }
    const closeModalhandler = () => {
      searchParams.delete("showModal")
      setSearchParams(searchParams)
    }


  return (
       <Main>
        {searchParams.has("showModal") ? (
        <Modal>
         <button style={{marginLeft: 350}} onClick={closeModalhandler}>X</button>
         <h3 style={{padding: 20}}>Add new material modal</h3>
         
         <p>Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. 
            Distinctio nihil nobis iure minima amet
            labore vero, tempora veniam eius a
            optio voluptatibus repudiandae.
            Blanditiis, mollitia est repudiandae 
            facilis voluptate eligendi!</p>
         
        </Modal>
        ) : null}
       <Add onClick={showModalhandler}>
         Add new material</Add>
             <Product>
                <Span>Material 1 </Span>
                <Link to={"1/submitted"}><Button>Details</Button></Link>
             </Product>
             <Product>
                <Span>Material 2</Span>
                <Link to={"2/submitted"}><Button>Details</Button></Link>
             </Product>
            <Outlet/>
       </Main> 
  )
}

export default MainProducts;

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


const Add= styled.button`
   margin-left: 450px;
   height: 40px;
   width:200px;
   border-radius: 20px;
   background-color: orange;
   font-size: 20px;
`

const Modal = styled.div`
   width: 400px;
   height: 300px; 
   background-color: #e47be4; 
   position: fixed;
   z-index: 5;
   margin-left: 100px;
   font-size: 20px;
   padding-left: 30px;
   
`