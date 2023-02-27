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
   <main>
    <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/productname1" element={<ProductName1 />} />
        <Route path="/productname2" element={<ProductName2 />} />
        <Route path="/mycart" element={<MyCart/>} />
        <Route path="/myorders" element={<MyOrders/>} />
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
