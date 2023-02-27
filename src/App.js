import { BrowserRouter,createBrowserRouter,Link,Route,Router,Routes, Outlet } from 'react-router-dom';
import './App.css';
import MyCart from './components/MyCart';
import MyOrders from './components/MyOrders';
import ProductName1 from './components/ProductName1';
import ProductName2 from './components/ProductName2';
import Products from './components/Products';

const routes = createBrowserRouter([
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/mycart",
    element: <MyCart/>,
  },
  {
    path: "/myorders",
    element: <MyOrders/>,
  },
])

function AppRout() {
  return (
    <div className="App">
      <Link to="/products">Products</Link>
      <Link to="/productname1">ProductName1</Link>
      <Link to="/productname2">ProductName2</Link>
      <Link to="/mycart">MyCart</Link>
      <Link to="/myorders">MyOrders</Link>
   {/* <Products/>
   <ProductName1/>
   <ProductName2/>
   <MyCart/>
   <MyOrders/> */}
   <main>
    <Routes>
        <Route path="/products" element={<Products />} />
    </Routes>
   </main>
   </div>
  );
}
 const App = () => {
  return (
    <BrowserRouter>
      <AppRout/>
    </BrowserRouter>
  )
 }

export default App;
