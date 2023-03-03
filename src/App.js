import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import MyCart from './pages/Students';
import MyOrders from './pages/Ratings';
import ProductName1 from './pages/ProductName1';
import MainProducts from './pages/MainProducts';
import LayoutHeaderProducts from './layout/LayoutHeaderProducts';
import Anouncements from './sidebar/Anouncements'
import Schedule  from './sidebar/Schedule'
import Notifications from './sidebar/Notifications'
import Submitted from './pages/Submitted';
import Waiting from './pages/Waiting';
import Late from './pages/Late';
import SideBar from './components/SideBar';
import CoursesPage from './sidebar/CoursesPage';
import Students from './pages/Students';
import StudentName1 from './pages/StudentName1';
import Ratings from './pages/Ratings';


function AppRout() {
  return (
    <div className="App">
    <Routes>
       <Route path="/" element = {<LayoutHeaderProducts/>}>
          <Route path="courses/" element={<CoursesPage />} >
            <Route path="materials" element={<MainProducts />}/>

            <Route path="materials/:detail" element={<ProductName1 />}>
               <Route path="submitted" element={<Submitted/>} />
               <Route path="waiting" element={<Waiting/>} />
               <Route path="late" element={<Late/>} />
            </Route>
           
            <Route path="students" element={<Students />} />
              <Route path="students/:studentsname1" element={<StudentName1/>}/>
        
          
            <Route path="ratings" element={<Ratings />} />
          </Route> 
            <Route path="anouncements" element={<Anouncements />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="schedule" element={<Schedule/>} />
      </Route>
    </Routes>
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
