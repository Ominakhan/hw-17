import { BrowserRouter,createBrowserRouter,Link,Route,Router,Routes, Outlet } from 'react-router-dom';
import './App.css';
import MyCart from './components/MyCart';
import MyOrders from './components/MyOrders';
import ProductName1 from './components/ProductName1';
import ProductName2 from './components/ProductName2';
import HeaderProducts from './components/HeaderProducts';
import MainProducts from './components/MainProducts';


function AppRout() {
  return (
    <div className="App">
      <HeaderProducts/>
   <main>
    <Routes>
        <Route path="/mainproducts" element={<MainProducts />} />
        <Route path="/mainproducts/:productname1" element={<ProductName1 />} />
        <Route path="/mainproducts/:productname2" element={<ProductName2 />} />
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
